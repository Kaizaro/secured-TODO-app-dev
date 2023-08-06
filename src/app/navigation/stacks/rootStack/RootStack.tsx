import * as React from 'react';
import {ROOT_STACK} from './RootStack.screens';
import {NO_HEADER_SCREEN_OPTIONS} from '../../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../../../../../App';
import {TODOListScreen} from '../../../../modules/TODO';
import {TODOEdit} from '../../../../modules/TODO/ui/screens/TODOEdit/TODOEdit';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROOT_STACK.TODO_LIST}>
      <Stack.Screen name={ROOT_STACK.AUTHENTICATION} component={App} options={{...NO_HEADER_SCREEN_OPTIONS}} />
      <Stack.Screen name={ROOT_STACK.TODO_LIST} component={TODOListScreen} options={{...NO_HEADER_SCREEN_OPTIONS}} />
      <Stack.Screen name={ROOT_STACK.TODO_EDIT} component={TODOEdit} options={{presentation: 'modal'}} />
    </Stack.Navigator>
  );
};

export {RootStack};
