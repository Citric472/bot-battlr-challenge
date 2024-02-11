
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8001'; // Update with your JSON server URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getBots = async () => {
  try {
    const response = await api.get('/bots');
    return response.data;
  } catch (error) {
    console.error('Error fetching bots:', error);
    throw error;
  }
};

export const deleteBot = async (botId) => {
  try {
    const response = await api.delete(`/bots/${botId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting bot:', error);
    throw error;
  }
};

// You can add more API functions here for creating, updating, etc., based on your application needs.

