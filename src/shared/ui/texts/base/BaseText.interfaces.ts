import {TextProps, TextStyle} from 'react-native';

export interface BaseTextProps extends TextProps {
  fontFamily?: TextStyle['fontFamily'];
  fontSizeScaled?: number;
  color?: TextStyle['color'];
  textAlign?: TextStyle['textAlign'];
  fontWeight?: TextStyle['fontWeight'];
  isUnderlined?: boolean;
  numberOfLines?: number;
  /**
   * Style from parent component
   */
  innerStyle?: TextStyle;
  key?: string;
  testID?: string;
}
