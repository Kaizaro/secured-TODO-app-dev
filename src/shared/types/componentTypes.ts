import {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

export interface IDefaultFC<CustomType = ViewStyle> extends PropsWithChildren {
  testId?: string;
  innerStyle?: CustomType;
}
