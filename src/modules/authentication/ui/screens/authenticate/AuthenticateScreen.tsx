import React, {FC, useCallback, useState} from 'react';
import {ComponentContainer, RegularText} from '../../../../../shared/ui';
import {CodeInputField} from '../../components';
import {authenticateScreenStyles as styles} from './AuthenticateScreen.styles';
import {ButtonMain} from '../../../../../shared/ui/buttons';
import { Linking } from "react-native";

const AuthenticateScreen: FC = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = useCallback((text: string) => {
    setCode(text);
  }, []);

  const handleEndEditing = useCallback(() => {
    Linking.openSettings();
  }, []);

  return (
    <ComponentContainer isTopEdged={true}>
      <RegularText>{"For proceed it's necessary to setup code on the device"}</RegularText>
      <ButtonMain text={'Go to settings'} onPress={handleEndEditing} />
    </ComponentContainer>
  );
};

export {AuthenticateScreen};
