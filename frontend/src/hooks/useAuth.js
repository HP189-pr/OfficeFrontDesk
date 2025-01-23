// Path: /frontend/src/hooks/useAuth.js

import { useState, useEffect, useCallback } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null); // State to manage user data
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for authentication status

  // Load user from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  // Login function to set user data and save to localStorage
  const login = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  }, []);

  // Logout function to clear user data and localStorage
  const logout = useCallback(() => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  }, []);

  // Function to refresh user data (optional, if backend supports refresh tokens or updated roles)
  const refreshUser = useCallback((updatedData) => {
    setUser(updatedData);
    localStorage.setItem('user', JSON.stringify(updatedData));
  }, []);

  return { user, isAuthenticated, login, logout, refreshUser };
};

export default useAuth;
