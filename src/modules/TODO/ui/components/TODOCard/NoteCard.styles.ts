import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {scaleFontSize, scaleVertical} from '../../../../../app/theme';

export const noteCardStyles = StyleSheet.create({
  noteCardContainer: {
    marginVertical: scaleVertical(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  dataContainer: {
    width: '80%',
  } as ViewStyle,
  text: {
    marginTop: scaleVertical(10),
  } as TextStyle,
  date: {
    marginTop: scaleVertical(16),
  } as TextStyle,
  removeButtonTextContainer: {
    width: '20%',
  } as ViewStyle,
  removeButtonText: {
    fontSize: scaleFontSize(12),
  } as TextStyle,
});
