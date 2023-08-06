import {ViewStyle} from 'react-native';

import {
  APP_TOUCHABLE_ACTIVE_OPACITY,
  APP_TOUCHABLE_DISABLED_OPACITY,
  APP_TOUCHABLE_INACTIVE_OPACITY,
} from '@app/constants';

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
