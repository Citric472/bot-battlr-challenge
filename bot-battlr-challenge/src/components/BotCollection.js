// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';

import { getBots} from '../services/api';
import './BotCollection.css';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBots();
        setBots(data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchData();
  }, []);

  const handleEnlist = (botId) => {
    onEnlist(botId);
  };

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Armor: {bot.armor}</p>
          <p>Created At: {new Date(bot.created_at).toLocaleString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleString()}</p>
          <button onClick={() => handleEnlist(bot.id)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
















