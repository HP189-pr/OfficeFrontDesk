// Path: /frontend/src/hooks/useAuth.js

import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null); // State to manage user data

  // Load user from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    }
  }, []);

  // Login function to set user data and save to localStorage
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Logout function to clear user data and localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout };
};

export default useAuth;
