// Path: /frontend/src/App.js

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/Auth/Login';
import PostLogin from './components/Auth/PostLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to Login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Example protected route (PostLogin or Dashboard) */}
        <Route path="/dashboard" element={<PostLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
