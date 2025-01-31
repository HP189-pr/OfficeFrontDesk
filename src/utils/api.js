// Path: /frontend/src/utils/api.js

import axios from 'axios';

// Create an Axios instance with default settings
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // If unauthorized, clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

// Utility functions for API calls
const api = {
  // GET request
  get: async (url, config = {}) => {
    const response = await apiClient.get(url, config);
    return response.data;
  },

  // POST request
  post: async (url, data, config = {}) => {
    const response = await apiClient.post(url, data, config);
    return response.data;
  },

  // PUT request
  put: async (url, data, config = {}) => {
    const response = await apiClient.put(url, data, config);
    return response.data;
  },

  // DELETE request
  delete: async (url, config = {}) => {
    const response = await apiClient.delete(url, config);
    return response.data;
  },

  // Fetch upcoming holidays
  fetchHolidays: async () => {
    const response = await apiClient.get('/rest/fetchholidays');
    return response.data;
  },

  // Get birthdays
  getBirthdays: async () => {
    const response = await apiClient.get('/rest/getbirthdays');
    return response.data;
  },

  // Get users
  getUsers: async () => {
    const response = await apiClient.get('/rest/getusers');
    return response.data;
  },
};

// Export the `api` object and the Axios instance
export { apiClient };
export default api;
