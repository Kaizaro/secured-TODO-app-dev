import React, {FC} from 'react';

import {useTheme} from '@react-navigation/native';
import {BaseTextProps} from '../base';
import BaseText from '../base/BaseText';

const BoldText: FC<BaseTextProps> = (props) => {
  const {colors} = useTheme();

  return (
    <BaseText fontSizeScaled={18} fontWeight={'600'} color={colors.text} {...props}>
      {props.children}
    </BaseText>
  );
};

export {BoldText};
