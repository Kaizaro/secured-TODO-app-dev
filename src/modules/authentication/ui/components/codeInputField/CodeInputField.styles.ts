import {StyleSheet} from 'react-native';
import { APP_COLORS, scaleHorizontal, scaleVertical } from "../../../../../app/theme";

export const codeInputFieldStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  codeInput: {
    width: '70%',
  },
  cell: {
    width: scaleHorizontal(30),
    height: scaleVertical(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: scaleVertical(1),
    // borderWidth: scaleVertical(1),
    borderColor: APP_COLORS.BLACK,
  },
});
