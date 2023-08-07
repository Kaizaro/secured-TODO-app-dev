import {useCallback} from 'react';
import {authenticateAsync} from 'expo-local-authentication';

export const useAuthenticate = () => {
  const authenticateUser = useCallback(async () => {
    const authResult = await authenticateAsync();
    console.log(authResult);

    // return authResult;
  }, []);

  return {authenticateUser};
};
