import React, {FC} from 'react';

import {View} from 'react-native';

import {emptyListStyles as styles} from './EmptyList.styles';
import {IEmptyList} from './EmptyList.types';
import {RegularText} from '../texts';
import {APP_COLORS} from '../../../app/theme';

const EmptyList: FC<IEmptyList> = ({message, innerStyle}) => {
  return (
    <View style={{...styles.container, ...innerStyle}}>
      <RegularText color={APP_COLORS.GRAY}>{message}</RegularText>
    </View>
  );
};

export {EmptyList};
