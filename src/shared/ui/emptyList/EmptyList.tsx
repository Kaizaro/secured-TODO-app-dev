import React, {FC} from 'react';

import {View} from 'react-native';

import {emptyListStyles as styles} from './EmptyList.styles';
import {IEmptyList} from './EmptyList.types';
import {RegularText} from '../texts';
import {APP_COLORS} from '../../../app/theme';
import {ButtonMain} from '../buttons';

const EmptyList: FC<IEmptyList> = ({message, buttonText, onButtonPress, innerStyle}) => {
  return (
    <View style={{...styles.container, ...innerStyle}}>
      <RegularText color={APP_COLORS.GRAY}>{message}</RegularText>
      {buttonText && onButtonPress && (
        <ButtonMain innerStyle={styles.button} text={buttonText} onPress={onButtonPress} />
      )}
    </View>
  );
};

export {EmptyList};
