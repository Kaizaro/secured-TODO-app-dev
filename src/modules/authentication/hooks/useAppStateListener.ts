import {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';

export const useAppStateListener = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      setAppState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return {appState};
};
