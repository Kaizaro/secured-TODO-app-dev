import {StyleSheet, ViewStyle} from 'react-native';
import {scaleVertical} from '../../../../app/theme';

export const buttonBaseStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaleVertical(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaleVertical(10),
  } as ViewStyle,
});
