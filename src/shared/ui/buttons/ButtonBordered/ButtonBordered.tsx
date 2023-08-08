import React, {FC} from 'react';

import {useTheme} from '@react-navigation/native';
import {IButtonBase} from '../ButtonBase/ButtonBase.types';
import {ButtonBase} from '../ButtonBase';

export const ButtonBordered: FC<IButtonBase> = (props) => {
  const {colors} = useTheme();

  return <ButtonBase borderColor={colors.primary} textColor={colors.primary} {...props} />;
};
