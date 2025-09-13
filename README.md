

<p align="center">
  <img src="https://cdnl.iconscout.com/lottie/premium/thumb/cricket-9639153-7874702.gif" alt="Cricket Animation" width="80">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=25&pause=1000&color=36BCF7&center=true&vCenter=true&width=435&lines=🏏+IPL+Match+Winner+Predictor;AI+powered+match+predictions;FastAPI+%2B+React+%2B+XGBoost" alt="Typing SVG" />
  <img src="https://cdnl.iconscout.com/lottie/premium/thumb/cricket-9639153-7874702.gif" alt="Cricket Animation" width="80">
</p>
<p align="center">
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3.9%2B-blue.svg" /></a>
  <a href="https://fastapi.tiangolo.com/"><img src="https://img.shields.io/badge/FastAPI-Backend-green.svg" /></a>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-Frontend-61DAFB.svg" /></a>
  <a href="https://xgboost.readthedocs.io/"><img src="https://img.shields.io/badge/XGBoost-ML-orange.svg" /></a>
  
</p>
<p align="center">
Predict the outcome of IPL matches with <b>AI + ML</b>!  
This project combines a <b>FastAPI backend</b> (with an XGBoost model) and a <b>React frontend</b> for an interactive match prediction experience.
</p>

---
## ✨ Features

- ⚡ **FastAPI backend** serving ML predictions
- 🧠 **XGBoost model** trained on IPL data
- 🧹 **Input cleaning \& encoding** for robustness
- 🌐 **CORS support** (open in dev, restrict in prod)
- 💻 **React frontend** with a simple UI
- 🚀 **Easy setup \& deployment**
---
## 🔗 Live Demo

- 🖥 **Frontend:** [https://your-frontend-url.com](https://your-frontend-url.com)
- 🔌 **Backend API:** [https://your-backend-url.com/predict](https://your-backend-url.com/predict)
---
## 🛠️ Setup \& Run


### Backend




# Install dependencies

pip install fastapi uvicorn xgboost numpy

# Run locally

uvicorn ipl_prediction.main:app --host 0.0.0.0 --port 8000 --reload



### Frontend



cd frontend
npm install
npm start


In development, point frontend Axios calls to:


http://localhost:8000/predict





## ⚠️ CORS Policy

- **Development:**  


allow_origins = ["*"]


- **Production (restrict to your frontend domain):**  


allow_origins = ["https://your-frontend-url.com"]






## 🗂 Project Structure

ipl_prediction/
├── main.py
├── xgb_model.json
├── encoding_dict.pkl

frontend/
├── src/
├── package.json

README.md





## 🚀 Deployment

- Deploy backend on Render, Railway, or Heroku  
- Deploy frontend on Vercel, Netlify, or GitHub Pages  
- Update frontend API URL to your deployed backend URL



## 🤝 Contributing

Contributions are welcome! 🎉 You can help by:

- Improving the ML model  
- Enhancing the frontend UI  
- Adding new features  

Open an issue or pull request to get started.

<p align="center">
  <img src="https://www.icegif.com/wp-content/uploads/thank-you-icegif-5.gif" width="120" alt="Thank you animation">
</p>


