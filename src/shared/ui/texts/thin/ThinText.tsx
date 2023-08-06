import React, {FC} from 'react';

import {BaseTextProps} from '../base';
import BaseText from '../base/BaseText';
import {APP_COLORS} from '../../../../app/theme';

const ThinText: FC<BaseTextProps> = (props) => {
  return (
    <BaseText fontSizeScaled={12} fontWeight={'300'} color={APP_COLORS.BLACK} {...props}>
      {props.children}
    </BaseText>
  );
};

export {ThinText};
