// Path: /frontend/src/hooks/useAuth.js

import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/queries';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const [loginMutation] = useMutation(LOGIN_MUTATION);

  const login = async (identifier, password) => {
    console.log('Login function called with:', { identifier, password });
    try {
      const { data } = await loginMutation({
        variables: { identifier, password },
      });
      console.log('Login mutation response:', data);
      if (data && data.validateUser) {
        const token = data.validateUser.userid; // Assuming the token is the userid
        localStorage.setItem('authToken', token);
        setIsAuthenticated(true);
        console.log('Login successful, token set:', token);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      return response.data.users;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      return null;
    }
  };

  return { isAuthenticated, login, logout, fetchUsers };
};
export default useAuth;
