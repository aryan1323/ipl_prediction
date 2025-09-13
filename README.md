IPL Match Winner Predictor
Predict the outcome of IPL matches with AI! This project consists of a FastAPI backend powered by an XGBoost model and a React frontend for interactive user input.

⚡ Features
FastAPI backend serving ML predictions

XGBoost model trained on IPL data

Input cleaning and encoding for robustness

Open CORS policy allowing any origin

React frontend with user-friendly UI

Easy local setup and deployment

🔗 Live Demo
Frontend React App: https://your-frontend-url.com

Backend API: https://your-backend-url.com/predict

🔧 Setup & Run Backend
bash
pip install fastapi uvicorn xgboost numpy
Run locally:

bash
uvicorn ipl_prediction.main:app --host 0.0.0.0 --port 8000 --reload
🔧 Setup & Run Frontend
bash
npm install
npm start
The frontend Axios calls should use your backend URL above in production, or http://localhost:8000/predict for local testing.

⚠️ CORS Policy
The backend uses an open CORS policy (allow_origins=["*"]), allowing calls from any origin. For production security, restrict origins:

python
allow_origins=["https://your-frontend-url.com"]
🚀 Deployment
Deploy backend and frontend on your favorite platforms (Render, Vercel, Netlify, etc.). Update frontend API URLs accordingly to avoid CORS or network errors.

🛠 Project Structure
text
ipl_prediction/
├── main.py
├── xgb_model.json
├── encoding_dict.pkl
frontend/
├── src/
├── package.json
README.md
🙌 Contributions
Improve the model, UI, or add features by sending issues or pull requests.
