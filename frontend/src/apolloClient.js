import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

// ApolloProvider Wrapper
export const ApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

// PropTypes validation
ApolloClientProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure 'children' is provided and is valid React node
};
