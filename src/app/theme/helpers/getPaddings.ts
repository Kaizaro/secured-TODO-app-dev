import {isIPhoneWithMonobrow} from 'react-native-status-bar-height';
import {scaleVertical} from './scale';

/**
 * Function for getting correct bottom space of screen
 * @param designPadding
 */
export const getPaddingBottom = (designPadding = 0) => {
  if (isIPhoneWithMonobrow()) {
    return designPadding;
  } else {
    return scaleVertical(24) + designPadding;
  }
};
