import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {scaleVertical} from '../../../../../app/theme';

export const noteCardStyles = StyleSheet.create({
  noteCardContainer: {} as ViewStyle,
  text: {
    marginTop: scaleVertical(10),
  } as TextStyle,
  date: {
    marginTop: scaleVertical(16),
  } as TextStyle,
});
