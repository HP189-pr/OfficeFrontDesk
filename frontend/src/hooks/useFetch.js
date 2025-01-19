// Path: /frontend/src/hooks/useFetch.js

import { useQuery } from '@apollo/client';

const useFetch = (query, variables = {}) => {
  const { data, loading, error } = useQuery(query, {
    variables, // Pass variables if required by the query
  });

  return { data, loading, error };
};

export default useFetch;
