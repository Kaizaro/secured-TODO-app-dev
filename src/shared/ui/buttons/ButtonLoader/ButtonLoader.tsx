import React, {FunctionComponent} from 'react';

import {ActivityIndicator} from 'react-native';

import {IButtonLoader} from './ButtonLoader.types';
import {APP_COLORS} from '../../../../app/theme';

const ButtonLoader: FunctionComponent<IButtonLoader> = ({color}) => (
  <ActivityIndicator size="small" color={color ?? APP_COLORS.WHITE} />
);

export {ButtonLoader};
