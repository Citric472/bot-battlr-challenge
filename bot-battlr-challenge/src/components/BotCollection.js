// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';
import { getBots } from '../services/api';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      const botsData = await getBots();
      setBots(botsData);
    };

    fetchBots();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <p>{bot.name}</p>
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;

