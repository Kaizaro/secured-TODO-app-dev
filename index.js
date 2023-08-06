/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppCore} from './src/app/core';

AppRegistry.registerComponent(appName, () => AppCore);
