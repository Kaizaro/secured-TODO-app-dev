import {isIPhoneWithMonobrow} from 'react-native-status-bar-height';
import {scaleVertical} from './scale';

export const getPaddingBottom = (designPadding = 0) => {
  if (isIPhoneWithMonobrow()) {
    return designPadding;
  } else {
    return scaleVertical(24) + designPadding;
  }
};
