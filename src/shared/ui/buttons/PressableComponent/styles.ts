import {ViewStyle} from 'react-native';

export const APP_TOUCHABLE_INACTIVE_OPACITY = 1;
export const APP_TOUCHABLE_ACTIVE_OPACITY = 0.7;
export const APP_TOUCHABLE_DISABLED_OPACITY = 0.3;

export const HIT_SLOP_TOUCHABLE = {
  top: 16,
  bottom: 16,
  left: 16,
  right: 16,
};

export const getPressableComponentStyles = (
  isPressed: boolean,
  isDisabled?: boolean | null,
  isAlwaysActive?: boolean,
): ViewStyle => {
  if (isPressed) {
    return {
      opacity: APP_TOUCHABLE_ACTIVE_OPACITY,
    };
  } else if (isDisabled) {
    if (isAlwaysActive) {
      return {
        opacity: APP_TOUCHABLE_INACTIVE_OPACITY,
      };
    } else {
      return {
        opacity: APP_TOUCHABLE_DISABLED_OPACITY,
      };
    }
  } else {
    return {
      opacity: APP_TOUCHABLE_INACTIVE_OPACITY,
    };
  }
};
