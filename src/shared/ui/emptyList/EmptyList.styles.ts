import {StyleSheet, ViewStyle} from 'react-native';
import {scaleVertical} from '../../../app/theme';

export const emptyListStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  image: {
    marginBottom: scaleVertical(10),
  },
  button: {
    marginTop: scaleVertical(24),
  },
});
