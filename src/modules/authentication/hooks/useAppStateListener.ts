import {useEffect, useRef, useState} from 'react';
import {AppState} from 'react-native';

export const useAppStateListener = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return {appState};
};
