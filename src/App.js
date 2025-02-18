import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [Earning, setEarning] = useState(0);
  const [BonusIndicator, setBonusIndicator] = useState(0);
  const [BonusElegebility, setBonusEligibility] = useState(0);
  const [BonusAmount, setBonusAmount] = useState(0);

  React.useEffect(() => {
    setBonusAmount((Earning * (BonusElegebility / 100) * (BonusIndicator / 100)).toFixed(2).toString());
  }, [Earning, BonusElegebility, BonusIndicator]);

  return (
    <div className="App">
      <lable>Earnings</lable>
      <input type="text" onChange={(e) => setEarning(e.target.value)} />
      <lable>Bunus Elegebility</lable>
      <input type="text" onChange={(e) => setBonusEligibility(e.target.value)} />
      <lable>Bunus Indicator</lable>
      <input type="text" onChange={(e) => setBonusIndicator(e.target.value)} />
      <lable>Bunus</lable>
      <p>{BonusAmount}</p>
    </div>
  );
}

export default App;
