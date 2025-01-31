import { useQuery } from '@apollo/client';

const useFetch = (query, variables = {}, options = {}) => {
  const { data, loading, error } = useQuery(query, {
    variables,
    ...options, // Spread options to customize the query
  });

  if (error) {
    console.error('GraphQL Fetch Error:', error);
  }

  return { data, loading, error };
};

export default useFetch;
