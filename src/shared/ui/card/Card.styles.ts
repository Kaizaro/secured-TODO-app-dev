import {StyleSheet, ViewStyle} from 'react-native';
import {APP_COLORS, scaleHorizontal, scaleVertical} from '../../../app/theme';

export const cardStyles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: scaleVertical(10),
    paddingHorizontal: scaleHorizontal(12),
    borderRadius: scaleVertical(6),
    backgroundColor: APP_COLORS.WHITE,
  } as ViewStyle,
});
