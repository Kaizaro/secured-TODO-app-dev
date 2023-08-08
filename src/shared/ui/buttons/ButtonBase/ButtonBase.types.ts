import {TextStyle, ViewStyle} from 'react-native';
import {IDefaultFC} from '../../../types';

export interface IButtonBase extends IDefaultFC {
  text?: string;
  numberOfLines?: number;
  onPress: () => void;
  onPressIn?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  loading?: boolean;
  loaderColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabledStyle?: ViewStyle;
}
