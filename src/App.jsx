import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
<<<<<<< HEAD
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
=======
import Login from './components/Auth/Login';
import Dashboard from './components/Auth/Dashboard';
import useAuth from './hooks/useAuth';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="h-screen peacock-background flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </div>
>>>>>>> c6a03518a1cd9754646c88521002c5c936ec66ff
  );
};

export default App;
