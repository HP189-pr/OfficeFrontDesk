import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import PropTypes from 'prop-types';

const mockClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Dummy URI
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: 'ignore', // Ignore errors
    },
  },
});

export const ApolloClientProvider = ({ children }) => (
  <ApolloProvider client={mockClient}>{children}</ApolloProvider>
);

ApolloClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
