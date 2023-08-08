import {StyleSheet, ViewStyle} from 'react-native';
import {scaleVertical} from '../theme';

export const splashScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  loader: {
    marginTop: scaleVertical(24),
  } as ViewStyle,
});
