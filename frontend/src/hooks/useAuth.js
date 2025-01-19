// Path: /frontend/src/hooks/useAuth.js

import { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

// GraphQL query to fetch user profile
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const useAuth = () => {
  const [user, setUser] = useState(null); // State to manage user data
  const [getUser, { data }] = useLazyQuery(GET_USER);

  // Load user from localStorage and optionally refetch profile
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      // Refetch user profile from the server
      getUser({ variables: { id: parsedUser.id } });
    }
  }, [getUser]);

  // Update user state when new data is fetched
  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data]);

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
