// Path: /frontend/src/hooks/useCustomMutation.js

import { useMutation } from '@apollo/client';

const useCustomMutation = (mutation) => {
  const [mutate, { data, loading, error }] = useMutation(mutation);

  return { mutate, data, loading, error };
};

export default useCustomMutation;
