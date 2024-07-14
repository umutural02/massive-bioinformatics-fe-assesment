import axios from 'axios';
import { notifyError } from './NotificationService';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const get = async (url, errorMessage, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    handleError(errorMessage);
  }
};

const handleError = (errorMessage) => {
    notifyError(errorMessage);  
};

export { get };
