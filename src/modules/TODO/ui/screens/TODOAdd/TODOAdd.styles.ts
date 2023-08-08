import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {APP_COLORS, scaleFontSize, scaleHorizontal, scaleVertical} from '../../../../../app/theme';

export const TODOAddStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: scaleHorizontal(12),
    paddingVertical: scaleVertical(10),
    borderWidth: scaleVertical(1),
    borderRadius: scaleVertical(4),
    borderColor: APP_COLORS.BLUE,
    fontSize: scaleFontSize(14),
  } as ViewStyle & TextStyle,
  button: {
    marginTop: scaleVertical(24),
  } as ViewStyle,
});
