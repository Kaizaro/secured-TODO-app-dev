import {StyleSheet, ViewStyle} from 'react-native';
import {scaleVertical} from '../../../../app/theme';

export const notesListStyles = StyleSheet.create({
  flatList: {} as ViewStyle,
  separator: {
    marginVertical: scaleVertical(16),
  },
});
