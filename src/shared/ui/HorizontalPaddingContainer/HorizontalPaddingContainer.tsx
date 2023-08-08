import React, {FC} from 'react';

import {View} from 'react-native';
import {IHorizontalPaddingContainer} from './HorizontalPaddingContainer.types';
import {scaleHorizontal} from '../../../app/theme/helpers';

const HorizontalPaddingContainer: FC<IHorizontalPaddingContainer> = ({
  children,
  innerStyle,
  paddingHorizontal = scaleHorizontal(16),
}) => {
  return <View style={{width: '100%', paddingHorizontal, ...innerStyle}}>{children}</View>;
};

export {HorizontalPaddingContainer};
