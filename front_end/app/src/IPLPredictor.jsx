import React, { useState } from "react";
import axios from "axios";
import { Trophy } from "lucide-react";
import "./IPLPredictor.css";

export default function IPLPredictor() {
  const [form, setForm] = useState({
    city: "",
    match_type: "",
    venue: "",
    team1: "",
    team2: "",
    toss_winner: "",
    toss_decision: "",
    target_runs: ""
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const commonMatchTypes = ["League", "Semi Final", "Final"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const allFilled = Object.values(form).every((v) => v !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const payload = {
      ...form,
      target_runs: parseInt(form.target_runs, 10)
    };

    try {
      const res = await axios.post(
        "https://backend-ipl-5.onrender.com/predict",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      if (res.data.error) {
        setError(res.data.error);
      } else {
        const win = res.data.prediction === 0 ? form.team1 : form.team2;
        setResult(win);
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.detail || "Bad request");
    } finally {
      setLoading(false);
    }
  };

  const fieldLabels = {
    city: "City",
    match_type: "Match Type",
    venue: "Venue",
    team1: "Team 1",
    team2: "Team 2",
    toss_winner: "Toss Winner",
    toss_decision: "Toss Decision",
    target_runs: "Target Runs"
  };

  const commonTeams = [
    "Mumbai Indians",
    "Chennai Super Kings",
    "Royal Challengers Bangalore",
    "Kolkata Knight Riders",
    "Delhi Capitals",
    "Rajasthan Royals",
    "Punjab Kings",
    "Sunrisers Hyderabad",
    "Gujarat Titans",
    "Lucknow Super Giants"
  ];

  const commonCities = [
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Delhi",
    "Jaipur",
    "Chandigarh",
    "Hyderabad",
    "Ahmedabad",
    "Lucknow"
  ];

  const commonVenues = [
    "Wankhede Stadium",
    "M. A. Chidambaram Stadium",
    "M. Chinnaswamy Stadium",
    "Eden Gardens",
    "Arun Jaitley Stadium",
    "Sawai Mansingh Stadium",
    "Punjab Cricket Association IS Bindra Stadium",
    "Rajiv Gandhi International Stadium",
    "Narendra Modi Stadium",
    "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium"
  ];

  const renderSelectField = (field, options) => (
    <div className="field-group" key={field}>
      <label>{fieldLabels[field]}</label>
      <select
        name={field}
        value={form[field]}
        onChange={handleChange}
        required
      >
        <option value="">Select {fieldLabels[field]}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  const renderInputField = (field) => (
    <div className="field-group" key={field}>
      <label>{fieldLabels[field]}</label>
      <input
        name={field}
        value={form[field]}
        onChange={handleChange}
        type={field === "target_runs" ? "number" : "text"}
        placeholder={`Enter ${fieldLabels[field]}`}
        required
        min={field === "target_runs" ? 1 : undefined}
        max={field === "target_runs" ? 300 : undefined}
      />
    </div>
  );

  const renderMatchTypeField = () => (
    <div className="field-group" key="match_type">
      <label>{fieldLabels["match_type"]}</label>
      <select
        name="match_type"
        value={form.match_type}
        onChange={handleChange}
        required
      >
        <option value="">Select {fieldLabels["match_type"]}</option>
        {commonMatchTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="icon-circle">
            <div className="icon-text">🏏</div>
          </div>
          <h1>IPL Match Predictor</h1>
          <p>Predict the winning team using AI</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid">
            {renderSelectField("city", commonCities)}
            {renderMatchTypeField()}
            {renderSelectField("venue", commonVenues)}
            {renderSelectField("team1", commonTeams)}
            {renderSelectField("team2", commonTeams)}
            {renderSelectField("toss_winner", commonTeams)}
            <div className="field-group">
              <label>Toss Decision</label>
              <select
                name="toss_decision"
                value={form.toss_decision}
                onChange={handleChange}
                required
              >
                <option value="">Select Decision</option>
                <option value="bat">Bat First</option>
                <option value="field">Field First</option>
              </select>
            </div>
            {renderInputField("target_runs")}
          </div>

          <button type="submit" disabled={!allFilled || loading} className="btn">
            {loading
              ? <span className="spinner" />
              : <><Trophy className="trophy" /> Predict Winner</>
            }
          </button>
        </form>

        {error && (
          <div className="message error">
            <div className="emoji">❌</div>
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="message success">
            <div className="emoji">🎉</div>
            <h2>Predicted Winner</h2>
            <p className="winner">{result}</p>
            <p className="subtext">Based on the match parameters provided</p>
          </div>
        )}
      </div>
    </div>
  );
}
