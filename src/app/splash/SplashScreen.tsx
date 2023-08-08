import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {APP_COLORS} from '../theme';
import {ComponentContainer, RegularText} from '../../shared/ui';
import {splashScreenStyles as styles} from './SplashScreen.styles';

const SplashScreen: FC = () => {
  return (
    <ComponentContainer isTopEdged={true} innerStyle={styles.container}>
      <RegularText>{'The app is loading, please wait...'}</RegularText>
      <ActivityIndicator size={'large'} color={APP_COLORS.BLUE} style={styles.loader} />
    </ComponentContainer>
  );
};

export {SplashScreen};
