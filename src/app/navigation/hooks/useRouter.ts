import {useCallback} from 'react';
import {useAuthenticate} from '../../../modules/authentication/hooks/useAuthenticate';
import {routeReplace} from '../utils';
import {ROOT_STACK} from '../stacks';
import {SecurityLevel} from 'expo-local-authentication';

/**
 * Hook for getting route when app is initializing
 */
const useRouter = () => {
  const {authenticateUser, getDeviceAuthenticateOptions} = useAuthenticate();

  /**
   * Functions checks is user authenticated and replace screen in stack
   */
  const handleAuthenticatedDeviceFlow = useCallback(async () => {
    const isAuthenticateSucceed = await authenticateUser();

    if (isAuthenticateSucceed) {
      routeReplace(ROOT_STACK.TODO_LIST);
    }
  }, [authenticateUser]);

  /**
   * Function starts when application is starting
   * Checks which method of security is installed on the device
   * and sets route for user
   */
  const handleInitializeUserRoute = useCallback(async () => {
    const authenticateMethod = await getDeviceAuthenticateOptions();
    if (authenticateMethod === SecurityLevel.NONE) {
      routeReplace(ROOT_STACK.CONFIG_AUTHENTICATION);
    } else {
      handleAuthenticatedDeviceFlow();
    }
  }, [getDeviceAuthenticateOptions, handleAuthenticatedDeviceFlow]);

  return {handleInitializeUserRoute};
};

export {useRouter};
