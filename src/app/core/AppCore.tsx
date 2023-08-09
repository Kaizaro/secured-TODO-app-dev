import React, {FC} from 'react';
import {StoreProvider} from '../store';
import {AppNavigation} from '../navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {appCoreStyles as styles} from './AppCore.styles';

/**
 * Component for render all application providers
 * and AppNavigation
 * @constructor
 */
const AppCore: FC = () => {
  return (
    <GestureHandlerRootView style={styles.gestureRootContainer}>
      <StoreProvider>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </StoreProvider>
    </GestureHandlerRootView>
  );
};

export {AppCore};
