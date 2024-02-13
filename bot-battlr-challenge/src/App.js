// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import { getBots, enlistBot, dischargeBot } from './services/api';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const botsData = await getBots();
        setBots(botsData);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchBots();
  }, []);

  const handleEnlist = async (bot) => {
    try {
      await enlistBot(bot.id);
      setArmy((prevArmy) => [...prevArmy, bot]);
    } catch (error) {
      console.error('Error enlisting bot:', error);
    }
  };

  const handleRelease = (bot) => {
    setArmy((prevArmy) => prevArmy.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  const handleDischarge = async (botId) => {
    try {
      await dischargeBot(botId);
      setArmy((prevArmy) => prevArmy.filter((enlistedBot) => enlistedBot.id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <Router>
      <div>
        <h1>Bot Army Management</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BotCollection bots={bots} onEnlist={handleEnlist} />
                <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



























