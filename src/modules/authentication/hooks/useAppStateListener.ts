import {useEffect, useState} from 'react';
import {AppState} from 'react-native';

/**
 * Hook for listening of application
 */
export const useAppStateListener = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    /**
     * Adding app state listener
     */
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      setAppState(nextAppState);
    });

    /**
     * Removing listener when screen will unmount
     */
    return () => {
      subscription.remove();
    };
  }, []);

  return {appState};
};
