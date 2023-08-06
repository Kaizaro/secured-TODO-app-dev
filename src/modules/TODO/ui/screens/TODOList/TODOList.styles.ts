import {StyleSheet, ViewStyle} from 'react-native';
import {scaleVertical} from '../../../../../app/theme';

export const TODOListScreenStyles = StyleSheet.create({
  container: {
    paddingTop: scaleVertical(12),
  } as ViewStyle,
  separator: {
    marginVertical: scaleVertical(10),
  },
});
