import {DefaultTheme, Theme} from '@react-navigation/native';
import {APP_COLORS} from './colors';

/**
 * Constant with default application theme
 */
export const APP_LIGHT_THEME = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: APP_COLORS.BLUE,
    background: APP_COLORS.WHITE,
    card: APP_COLORS.BLUE,
    text: APP_COLORS.WHITE,
    border: APP_COLORS.BORDER,
    notification: APP_COLORS.ULTRA_VIOLET,
  },
} as Theme;
