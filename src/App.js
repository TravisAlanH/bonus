import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [earning, setEarning] = useState(0);
  const [bonusIndicator, setBonusIndicator] = useState(0);
  const [bonusEligibility, setBonusEligibility] = useState(0);
  const [bonusAmount, setBonusAmount] = useState(0);

  // Effect hook to calculate bonus amount whenever inputs change
  useEffect(() => {
    const calculatedBonus = (earning * (bonusEligibility / 100) * (bonusIndicator / 100)).toFixed(2);
    setBonusAmount(calculatedBonus);
  }, [earning, bonusEligibility, bonusIndicator]);

  return (
    <div className="app-container">
      <h2>Bonus Calculator</h2>
      <div className="input-group">
        <label>Earnings ($):</label>
        <input type="number" value={earning} onChange={(e) => setEarning(parseFloat(e.target.value) || 0)} />
      </div>
      <div
        id="note"
        style={{
          fontSize: "12px",
          fontStyle: "italic",
          color: "#555",
          marginBottom: "10px",
          paddingBottom: "10px",
        }}
      >
        {`APD > Pay & Tax > Year 2024 > Gross > Regular`}
      </div>
      <div className="input-group">
        <label>Bonus Eligibility (%):</label>
        <input type="number" value={bonusEligibility} onChange={(e) => setBonusEligibility(parseFloat(e.target.value) || 0)} />
      </div>

      <div className="input-group">
        <label>Bonus Rate (%):</label>
        <input type="number" value={bonusIndicator} onChange={(e) => setBonusIndicator(parseFloat(e.target.value) || 0)} />
      </div>
      <div className="result">
        <h3>Bonus Amount: ${bonusAmount}</h3>
      </div>
      <div
        id="note"
        style={{
          fontSize: "12px",
          fontStyle: "italic",
          color: "#555",
          marginTop: "10px",
        }}
      >
        This is a base calculation. Please account for taxes, deductions, and tenure at Sunbird.
      </div>
      <style>
        {`
          .app-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
            text-align: center;
            font-family: Arial, sans-serif;
          }
          .input-group {
            margin: 15px 0;
          }
          label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
          }
          input {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 16px;
          }
          .result {
            margin-top: 20px;
            padding: 10px;
            background-color: #e0f7fa;
            border-radius: 4px;
            font-size: 18px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

export default App;
