import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {scaleVertical} from '../../../../../app/theme';

export const configureAuthenticateScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  description: {
    marginTop: scaleVertical(24),
  } as TextStyle,
});
