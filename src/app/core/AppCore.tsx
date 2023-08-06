import React, {FC} from 'react';
import {StoreProvider} from '../store';
import {AppNavigation} from '../navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppCore: FC = () => {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export {AppCore};
