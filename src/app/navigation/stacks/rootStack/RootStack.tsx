import * as React from 'react';
import {ROOT_STACK} from './RootStack.screens';
import {NO_HEADER_SCREEN_OPTIONS} from '../../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../../../../../App';
import {TODOListScreen, TODOAdd, TODOEdit} from '../../../../modules/TODO';
import {AuthenticateScreen} from '../../../../modules/authentication';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROOT_STACK.AUTHENTICATION}
        component={AuthenticateScreen}
        options={{...NO_HEADER_SCREEN_OPTIONS}}
      />
      <Stack.Screen name={ROOT_STACK.TODO_LIST} component={TODOListScreen} options={{...NO_HEADER_SCREEN_OPTIONS}} />
      <Stack.Screen
        name={ROOT_STACK.TODO_ADD}
        component={TODOAdd}
        options={{presentation: 'modal', headerTitle: 'Add TODO'}}
      />
      <Stack.Screen
        name={ROOT_STACK.TODO_EDIT}
        component={TODOEdit}
        options={{presentation: 'modal', headerTitle: 'Edit TODO'}}
      />
    </Stack.Navigator>
  );
};

export {RootStack};
