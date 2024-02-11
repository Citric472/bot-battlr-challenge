// src/App.js
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { getBots, deleteBot } from './services/api';
import './App.css';

function App() {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        // Removed unused variable
        await getBots();
        // setBots(botsData); // Remove this line if not used
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchBots();
  }, []);

  const enlistBot = (bot) => {
    if (!army.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = army.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setArmy(updatedArmy);
  };

  const dischargeBot = async (botId) => {
    try {
      await deleteBot(botId);
      const updatedArmy = army.filter((enlistedBot) => enlistedBot.id !== botId);
      setArmy(updatedArmy);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div>
      <h1>Bot Army Management</h1>
      <BotCollection onEnlist={enlistBot} />
      <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
    </div>
  );
}

export default App;





