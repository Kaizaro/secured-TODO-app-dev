import React, {FC} from 'react';

import {Pressable, PressableProps, ViewStyle} from 'react-native';

import {getPressableComponentStyles} from './styles';

interface IProps extends PressableProps {
  isAlwaysActive?: boolean;
  disabledStyle?: ViewStyle;
  innerStyle?: ViewStyle;
}

const PressableComponent: FC<IProps> = (props) => {
  const {onPress, children, disabled, innerStyle, disabledStyle, isAlwaysActive} = props;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={({pressed}) => ({
        ...getPressableComponentStyles(pressed, disabled, isAlwaysActive),
        ...innerStyle,
        ...disabledStyle,
      })}
      {...props}>
      {children}
    </Pressable>
  );
};

export {PressableComponent};
