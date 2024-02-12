import React, { useState, useEffect } from 'react';
import { getBots, enlistBot, releaseBot, dischargeBot } from './services/api';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBots();
      setBots(data);
    };

    fetchData();
  }, []);

  const handleEnlist = async (botId) => {
    try {
      await enlistBot(botId);
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, botId]);
    } catch (error) {
      console.error('Error enlisting bot:', error);
    }
  };

  const handleRelease = async (botId) => {
    try {
      await releaseBot(botId);
      setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((id) => id !== botId));
    } catch (error) {
      console.error('Error releasing bot:', error);
    }
  };

  const handleDischarge = async (botId) => {
    try {
      await dischargeBot(botId);
      setEnlistedBots((prevEnlistedBots) => prevEnlistedBots.filter((id) => id !== botId));
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div className="app">
      <h1>Bot Army Management</h1>
      <YourBotArmy enlistedBots={enlistedBots} onRelease={handleRelease} onDischarge={handleDischarge} />
      <h1>Bot Collection</h1>
      
      <BotCollection bots={bots} onEnlist={handleEnlist} />
      <h1>Your Bot Army</h1>
    </div>
  );
};

export default App;

















