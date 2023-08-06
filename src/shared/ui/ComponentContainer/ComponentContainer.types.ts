import {EdgeInsets} from 'react-native-safe-area-context';
import {IDefaultFC} from '../../types';

interface IComponentContainerCustom {
  isTopEdged?: boolean;
  isBottomEdged?: boolean;
}

export interface IComponentContainerStyles extends IComponentContainerCustom {
  insetsEdge?: EdgeInsets;
}

export interface IComponentContainerProps extends IComponentContainerCustom, IDefaultFC {
  isHorizontalPaddingEdged?: boolean;
  isKeyboard?: boolean;
  backgroundColor?: string;
}
