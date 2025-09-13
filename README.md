<!-- Animated banner / header -->
<p align="center">
  <img src="https://media.giphy.com/media/xT1XGRx0fdjRm2HjHa/giphy.gif" alt="Cricket Animation" width="80">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=25&pause=1000&color=36BCF7&center=true&vCenter=true&width=435&lines=🏏+IPL+Match+Winner+Predictor;AI+powered+match+predictions;FastAPI+%2B+React+%2B+XGBoost" alt="Typing SVG" />
  <img src="https://media.giphy.com/media/xT1XGRx0fdjRm2HjHa/giphy.gif" alt="Cricket Animation" width="80">
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
- 🧹 **Input cleaning & encoding** for robustness  
- 🌐 **CORS support** (open in dev, restrict in prod)  
- 💻 **React frontend** with a simple UI  
- 🚀 **Easy setup & deployment**

---

## 🔗 Live Demo

- 🖥 **Frontend:** [https://ipl-prediction-odgx.vercel.app/](https://ipl-prediction-odgx.vercel.app/)  
- 🔌 **Backend API:** [https://backend-ipl-5.onrender.com](https://backend-ipl-5.onrender.com)  

---

## 🛠️ Setup & Run

### Backend

```bash
# Install dependencies
pip install fastapi uvicorn xgboost numpy

# Run locally
uvicorn ipl_prediction.main:app --host 0.0.0.0 --port 8000 --reload
