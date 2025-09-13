from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from xgboost import XGBClassifier
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000","http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load model
model = XGBClassifier()
model.load_model("xgb_model.json")

# Load encoding dictionary
with open("encoding_dict.pkl", "rb") as f:
    encoding_dict = pickle.load(f)

# Clean text function
def clean_text(x):
    if not isinstance(x, str):
        return x
    x = x.replace(" ", "").lower()
    x = x.replace("royalchallengersbengaluru", "royalchallengersbangalore")
    x = x.replace("risingpunesupergiantss", "risingpunesupergiants")
    x = x.replace("risingpunesupergiant", "risingpunesupergiants")
    x = x.replace("punjabkings", "kingsxipunjab")
    return x

# Input schema without winner
class MatchInput(BaseModel):
    city: str
    match_type: str
    venue: str
    team1: str
    team2: str
    toss_winner: str
    toss_decision: str
    target_runs: int


@app.post("/predict")
def predict(data: MatchInput):
    data_dict = data.dict()
    
    # Clean strings
    for k in data_dict:
        if isinstance(data_dict[k], str):
            data_dict[k] = clean_text(data_dict[k])

    # Encode categorical features
    cat_cols = ['city','match_type','venue','team1','team2','toss_winner','toss_decision']
    X_encoded = []
    for col in cat_cols:
        try:
            X_encoded.append(int(encoding_dict[col][data_dict[col]]))
        except KeyError:
            return {"error": f"Unknown value '{data_dict[col]}' for column '{col}'."}

    # Add numeric feature
    X_encoded.append(data_dict['target_runs'])

    # Convert to 2D array for model
    X_input = np.array([X_encoded])

    # Predict
    pred = int(model.predict(X_input)[0])  # <-- Convert to Python int

    return {"prediction": pred}