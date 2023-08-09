import React, {FC} from 'react';

import {PressableProps, StyleProp, ViewStyle} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {APP_TOUCHABLE_ACTIVE_OPACITY} from '../PressableComponent/styles';

interface IProps extends PressableProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const PressableOpacity: FC<IProps> = ({onPress, children, style, ...rest}) => (
  <TouchableOpacity activeOpacity={APP_TOUCHABLE_ACTIVE_OPACITY} style={style} onPress={onPress} {...rest}>
    {children}
  </TouchableOpacity>
);
