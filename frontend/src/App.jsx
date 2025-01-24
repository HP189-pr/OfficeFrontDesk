import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import Login from './components/Auth/Login';
import Dashboard from './components/Auth/Dashboard';
import useAuth from './hooks/useAuth';

// Apollo Client setup
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/v1/graphql', // Replace with your GraphQL endpoint
    headers: {
      'x-hasura-admin-secret':
        process.env.REACT_APP_HASURA_SECRET || 'your-secret-key',
    },
  }),
  cache: new InMemoryCache(),
});

const App = () => {
  const { isAuthenticated, login } = useAuth();

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
          <Route path="/login" element={<Login onLogin={login} />} />

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
