import { useMutation } from '@apollo/client';

const useCustomMutation = (mutation, options = {}) => {
  const [mutate, { data, loading, error }] = useMutation(mutation, options);

  if (error) {
    console.error('GraphQL Mutation Error:', error);
  }

  return { mutate, data, loading, error };
};

export default useCustomMutation;
