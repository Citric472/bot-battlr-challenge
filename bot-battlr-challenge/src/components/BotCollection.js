import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBots, enlistBot } from '../services/api';
import BotCard from './BotCard';
import './BotCollection.css'; // Make sure to create this CSS file

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

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
      ))}
    </div>
  );
};

export default BotCollection;













