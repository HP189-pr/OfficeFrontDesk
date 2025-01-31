import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Use environment variables for sensitive data
const client = new ApolloClient({
  link: new HttpLink({
    uri:
      process.env.REACT_APP_GRAPHQL_ENDPOINT ||
      'http://localhost:8080/v1/graphql', // Use the GraphQL endpoint from the environment variable or fallback to localhost
    headers: {
<<<<<<< HEAD
      'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_SECRET, // Securely load the Hasura admin secret
=======
      'x-hasura-admin-secret': 'Ksvsvkm2007',
>>>>>>> c6a03518a1cd9754646c88521002c5c936ec66ff
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
