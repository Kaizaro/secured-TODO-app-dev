import React, {FC} from 'react';

import {useTheme} from '@react-navigation/native';
import {BaseTextProps} from '../base';
import BaseText from '../base/BaseText';

const RegularText: FC<BaseTextProps> = (props) => {
  const {colors} = useTheme();

  return (
    <BaseText fontSizeScaled={16} fontWeight={'400'} color={colors.text} {...props}>
      {props.children}
    </BaseText>
  );
};

export {RegularText};
