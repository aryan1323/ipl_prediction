# 🏏 IPL Match Winner Predictor

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg)](https://www.python.org/)  
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green.svg)](https://fastapi.tiangolo.com/)  
[![React](https://img.shields.io/badge/React-Frontend-61DAFB.svg)](https://reactjs.org/)  
[![XGBoost](https://img.shields.io/badge/XGBoost-ML-orange.svg)](https://xgboost.readthedocs.io/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Predict the outcome of IPL matches with **AI + ML**!  
This project combines a **FastAPI backend** (with an XGBoost model) and a **React frontend** for an interactive match prediction experience.

---

## ✨ Features
- ⚡ **FastAPI backend** serving ML predictions
- 🧠 **XGBoost model** trained on IPL data
- 🧹 **Input cleaning & encoding** for robustness
- 🌐 **CORS support** (open in dev, restrict in prod)
- 💻 **React frontend** with a simple UI
- 🚀 **Easy setup & deployment**

---

## 🔗 Live Demo
- Frontend: `https://your-frontend-url.com`  
- Backend API: `https://your-backend-url.com/predict`  

---

## 🛠️ Setup & Run

### Backend
```bash
# Install dependencies
pip install fastapi uvicorn xgboost numpy

# Run locally
uvicorn ipl_prediction.main:app --host 0.0.0.0 --port 8000 --reload
cd frontend
npm install
npm start
Frontend
cd frontend
npm install
npm start


In development, Axios calls in the frontend should point to
http://localhost:8000/predict.
For production, update to your deployed backend URL.

⚠️ CORS Policy

Default (development):

allow_origins = ["*"]


Production (restrict to frontend domain):

allow_origins = ["https://your-frontend-url.com"]

🗂 Project Structure
ipl_prediction/
├── main.py
├── xgb_model.json
├── encoding_dict.pkl

frontend/
├── src/
├── package.json

README.md

🚀 Deployment

Deploy backend on Render, Railway, or Heroku

Deploy frontend on Vercel, Netlify, or GitHub Pages

Update frontend API URL to point to deployed backend

🤝 Contributing

Contributions are welcome! 🎉
You can help by:

Improving the ML model

Enhancing the frontend UI

Adding new features

Open an issue or pull request to get started.
