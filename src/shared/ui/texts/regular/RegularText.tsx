import React, {FC} from 'react';

import {BaseTextProps} from '../base';
import BaseText from '../base/BaseText';
import {APP_COLORS} from '../../../../app/theme';

const RegularText: FC<BaseTextProps> = (props) => {
  return (
    <BaseText fontSizeScaled={16} fontWeight={'400'} color={APP_COLORS.BLACK} {...props}>
      {props.children}
    </BaseText>
  );
};

export {RegularText};
