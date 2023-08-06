import React, {FC} from 'react';

import {useTheme} from '@react-navigation/native';
import {BaseTextProps} from '../base';
import BaseText from '../base/BaseText';

const ThinText: FC<BaseTextProps> = (props) => {
  const {colors} = useTheme();

  return (
    <BaseText fontSizeScaled={12} fontWeight={'300'} color={colors.text} {...props}>
      {props.children}
    </BaseText>
  );
};

export {ThinText};
