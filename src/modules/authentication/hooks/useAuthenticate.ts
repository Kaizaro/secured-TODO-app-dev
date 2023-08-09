import {useCallback} from 'react';
import {authenticateAsync, getEnrolledLevelAsync} from 'expo-local-authentication';

/**
 * Hook for working with authentication
 */
export const useAuthenticate = () => {
  /**
   * Function authenticate user by PIN/Passcode of by Biometry
   *
   * @returns Promise<boolean>
   */
  const authenticateUser = useCallback(async () => {
    const authResult = await authenticateAsync();
    if (authResult) {
      return authResult.success;
    } else return false;
  }, []);

  /**
   * Function checks which security level is installed on the device
   * and return it
   *
   * @returns Promise<SecurityLevel>
   */
  const getDeviceAuthenticateOptions = useCallback(async () => {
    return await getEnrolledLevelAsync();
  }, []);

  return {authenticateUser, getDeviceAuthenticateOptions};
};
