import React, {FC} from 'react';

import {useTheme} from '@react-navigation/native';
import {IButtonBase} from '../ButtonBase/ButtonBase.types';
import {ButtonBase} from '../ButtonBase';
import {APP_COLORS} from '../../../../app/theme';

export const ButtonMain: FC<IButtonBase> = (props) => {
  const {colors} = useTheme();

  return <ButtonBase backgroundColor={colors.primary} textColor={APP_COLORS.WHITE} {...props} />;
};
