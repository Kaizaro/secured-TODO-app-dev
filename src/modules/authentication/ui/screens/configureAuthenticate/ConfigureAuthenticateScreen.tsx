import React, {FC, useCallback, useEffect} from 'react';
import {BoldText, ComponentContainer, RegularText} from '../../../../../shared/ui';
import {configureAuthenticateScreenStyles as styles} from './ConfigureAuthenticateScreen.styles';
import {ButtonMain} from '../../../../../shared/ui/buttons';
import {Linking, Platform, View} from 'react-native';
import {useAppStateListener, useAuthenticate} from '../../../hooks';
import {SecurityLevel} from 'expo-local-authentication';
import {ROOT_STACK, routeReplace} from '../../../../../app/navigation';

const ConfigureAuthenticateScreen: FC = () => {
  const {appState} = useAppStateListener();
  const {authenticateUser, getDeviceAuthenticateOptions} = useAuthenticate();

  const handleGoToSecuritySettingsButtonPress = useCallback(() => {
    Platform.OS === 'ios'
      ? Linking.openURL('App-Prefs:TOUCHID_PASSCODE')
      : Linking.sendIntent('android.settings.SECURITY_SETTINGS');
  }, []);

  const handleDeviceSecurityLevel = useCallback(async () => {
    const deviceSecurityLevel = await getDeviceAuthenticateOptions();
    if (deviceSecurityLevel !== SecurityLevel.NONE) {
      const isUserAuthenticated = await authenticateUser();

      isUserAuthenticated && routeReplace(ROOT_STACK.TODO_LIST);
    }
  }, [authenticateUser, getDeviceAuthenticateOptions]);

  useEffect(() => {
    if (appState === 'active') {
      handleDeviceSecurityLevel();
    }
  }, [appState, handleDeviceSecurityLevel]);

  return (
    <ComponentContainer testId={'ConfigureAuthenticateScreen'} isTopEdged={true} innerStyle={styles.container}>
      <View style={styles.textContainer}>
        <BoldText>{'Thank you for using "Security TODO"'}</BoldText>
        <RegularText innerStyle={styles.description}>
          {"For proceeding it's necessary to authenticate yourself with"}{' '}
          <BoldText fontSizeScaled={18}>{'PIN/Password'}</BoldText> {'or with using biometry'}{' '}
          <BoldText fontSizeScaled={18}>{'(FaceID/TouchID)'}</BoldText>{' '}
          {'on the device. Please, configure it in the security settings.'}
        </RegularText>
      </View>
      <ButtonMain text={'Go to security settings'} onPress={handleGoToSecuritySettingsButtonPress} />
    </ComponentContainer>
  );
};

export {ConfigureAuthenticateScreen};
