import * as React from 'react';
import {ROOT_STACK} from './RootStack.screens';
import {NO_HEADER_SCREEN_OPTIONS} from '../../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROOT_STACK.AUTHENTICATION}>
      <Stack.Screen name={ROOT_STACK.AUTHENTICATION} component={} options={{...NO_HEADER_SCREEN_OPTIONS}} />
      {/*<Stack.Screen*/}
      {/*  name={ROOT_STACK.RENT_AVAILABLE_MILEAGE}*/}
      {/*  component={RentAvailableMileage}*/}
      {/*  options={{header: () => getHeader({titleLocale: 'widget_mileage'})}}*/}
      {/*/>*/}
    </Stack.Navigator>
  );
};

export {RootStack};
