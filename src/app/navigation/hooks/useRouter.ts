import {useCallback} from 'react';
import {useAuthenticate} from '../../../modules/authentication/hooks/useAuthenticate';
import {routeReplace} from '../utils';
import {ROOT_STACK} from '../stacks';
import {SecurityLevel} from 'expo-local-authentication';

const useRouter = () => {
  const {authenticateUser, getDeviceAuthenticateOptions} = useAuthenticate();

  /**
   *
   */
  const handleAuthenticatedDeviceFlow = useCallback(async () => {
    const isAuthenticateSucceed = await authenticateUser();

    if (isAuthenticateSucceed) {
      routeReplace(ROOT_STACK.TODO_LIST);
    }
  }, [authenticateUser]);

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
