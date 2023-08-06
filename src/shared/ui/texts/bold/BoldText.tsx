import React, {FC} from 'react';

import {BaseTextProps} from '../base';
import BaseText from '../base/BaseText';
import {APP_COLORS} from '../../../../app/theme';

const BoldText: FC<BaseTextProps> = (props) => {
  return (
    <BaseText fontSizeScaled={18} fontWeight={'600'} color={APP_COLORS.BLACK} {...props}>
      {props.children}
    </BaseText>
  );
};

export {BoldText};
