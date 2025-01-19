// Path: /frontend/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18's root API
import App from './App';
import './styles/global.css';
import { ApolloClientProvider } from './apolloClient'; // Apollo Client provider

// Get the root element from the DOM
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a root and render the application
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ApolloClientProvider>
        <App />
      </ApolloClientProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found');
}
