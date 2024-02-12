import React from 'react';
import './BotCard.css'; // Make sure to create this CSS file

const BotCard = ({ bot, onEnlist }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <button onClick={() => onEnlist(bot.id)}>Enlist</button>
    </div>
  );
};

export default BotCard;


