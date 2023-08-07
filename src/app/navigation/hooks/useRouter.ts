import {useCallback} from 'react';
import {useAuthenticate} from '../../../modules/authentication/hooks/useAuthenticate';

const useRouter = () => {
  const {authenticateUser} = useAuthenticate();

  const handleInitializeUserRoute = useCallback(async () => {
    authenticateUser();
  }, [authenticateUser]);

  return {handleInitializeUserRoute};
};

export {useRouter};
