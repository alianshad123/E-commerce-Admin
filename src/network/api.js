// src/network/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/'; // Replace with your actual base URL

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    
    // Add more default headers if needed
  },
  timeout: 10000, // Set a timeout for requests
});

// Interceptors for handling request/response or errors globally
api.interceptors.request.use(
  (config) => {
    // You can add authentication tokens to headers here if needed
    // config.headers.Authorization = `Bearer ${your_token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally here, for example, log them or show error messages
    return Promise.reject(error);
  }
);

export default api;
