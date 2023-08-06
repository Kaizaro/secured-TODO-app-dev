import * as React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {ROOT_STACK} from './RootStack.screens';
import {NO_HEADER_SCREEN_OPTIONS} from '../../constants';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROOT_STACK.AUTHENTICATION}>
      <Stack.Screen name={ROOT_STACK.AUTHENTICATION} component={SplashScreen} options={{...NO_HEADER_SCREEN_OPTIONS}} />
      {/*<Stack.Screen*/}
      {/*  name={ROOT_STACK.RENT_AVAILABLE_MILEAGE}*/}
      {/*  component={RentAvailableMileage}*/}
      {/*  options={{header: () => getHeader({titleLocale: 'widget_mileage'})}}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};

export {RootStack};
