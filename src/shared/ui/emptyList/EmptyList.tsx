import React, {FC} from 'react';

import {Text, View} from 'react-native';

import {emptyListStyles as styles} from './EmptyList.styles';
import {IEmptyList} from './EmptyList.types';

const EmptyList: FC<IEmptyList> = ({message, innerStyle}) => {
  return (
    <View style={{...styles.container, ...innerStyle}}>
      <Text>{message}</Text>
    </View>
  );
};

export {EmptyList};
