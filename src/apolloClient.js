import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/v1/graphql', // Replace with your GraphQL endpoint
    headers: {
      'x-hasura-admin-secret': 'Ksvsvkm2007',
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
