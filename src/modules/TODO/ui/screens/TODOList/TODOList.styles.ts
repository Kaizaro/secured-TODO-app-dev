import { Dimensions, StyleSheet, ViewStyle } from "react-native";
import {scaleVertical} from '../../../../../app/theme';

export const TODOListScreenStyles = StyleSheet.create({
  container: {
    paddingTop: scaleVertical(12),
  } as ViewStyle,
  contentContainer: {
    paddingTop: scaleVertical(12),
  } as ViewStyle,
  separator: {
    marginVertical: scaleVertical(10),
  },
  emptyList: {
    flex: 1,
    height: Dimensions.get('window').height - scaleVertical(100),
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});
