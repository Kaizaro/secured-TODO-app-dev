import {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

export interface IDefaultFC<CustomType = ViewStyle> extends PropsWithChildren {
  innerStyle?: CustomType;
}
