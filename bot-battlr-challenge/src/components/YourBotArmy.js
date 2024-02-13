// src/components/YourBotArmy.js
import React from 'react';
import './YourBotArmy.css'; // Import the CSS file

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="container">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id} className="botCard">
          <p>{bot.name}</p>
          <button onClick={() => onRelease(bot)} className="releaseButton">
            Release
          </button>
          <button onClick={() => onDischarge(bot.id)} className="dischargeButton">
            Discharge
          </button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;












