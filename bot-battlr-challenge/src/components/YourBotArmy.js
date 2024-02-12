import React from 'react';
import './YourBotArmy.css'; // Make sure to create this CSS file

const YourBotArmy = ({ enlistedBots, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      {enlistedBots.map((bot) => (
        <div key={bot.id} className="enlisted-bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <button onClick={() => onRelease(bot.id)}>Release</button>
          <button onClick={() => onDischarge(bot.id)}>Discharge</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;







