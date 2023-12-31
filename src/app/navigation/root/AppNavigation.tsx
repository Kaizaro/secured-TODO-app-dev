import * as React from 'react';
import {useCallback} from 'react';

import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import {APP_LIGHT_THEME} from '../../theme';
import {useRouter} from '../hooks';
import {RootStack} from '../stacks';

/**
 * Ref for navigator. Uses for navigation funcs without hooks
 */
export const navigatorRef = createNavigationContainerRef();

/**
 * App navigator container
 *
 * @constructor
 */
const AppNavigation = () => {
  const {handleInitializeUserRoute} = useRouter();

  /**
   * Method for getting correct route for user
   */
  const handleOnReady = useCallback(async () => {
    await handleInitializeUserRoute();
  }, [handleInitializeUserRoute]);

  return (
    <NavigationContainer theme={APP_LIGHT_THEME} onReady={handleOnReady} ref={navigatorRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export {AppNavigation};
