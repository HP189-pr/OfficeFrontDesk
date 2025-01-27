import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Ensure the correct path
import Login from './components/Auth/Login';
import Dashboard from './components/WorkContainer/WorkContainer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Example logic for setting authentication
    setIsAuthenticated(true);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* Default route redirects to login */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Login page */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Dashboard screen */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />

          {/* Fallback for undefined routes */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
