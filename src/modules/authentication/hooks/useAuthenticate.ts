import {useCallback} from 'react';
import { authenticateAsync, getEnrolledLevelAsync } from "expo-local-authentication";

export const useAuthenticate = () => {
  const authenticateUser = useCallback(async () => {
    const authResult = await authenticateAsync();
    console.log(authResult);
    if (authResult) {
      return authResult.success;
    } else return false;
  }, []);

  const getDeviceAuthenticateOptions = useCallback(async () => {
    const deviceAuthenticateOptions = await getEnrolledLevelAsync();

    console.log('deviceAuthenticateOptions', deviceAuthenticateOptions);
    return deviceAuthenticateOptions;
  }, []);

  return {authenticateUser, getDeviceAuthenticateOptions};
};
