import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Login from './components/Auth/Login';
import Dashboard from './components/Auth/Dashboard';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Default route */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* Protected Dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
