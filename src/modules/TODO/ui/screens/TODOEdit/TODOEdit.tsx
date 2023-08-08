import React, {FC, useCallback, useEffect} from 'react';
import {ComponentContainer} from '../../../../../shared/ui';
import {TextInput} from 'react-native';
import {useSelectedTODO} from '../../../hooks';
import {useTODOEditForm} from '../../../hooks/useTODOEditForm';
import {TODOEditStyles as styles} from './TODOEdit.styles';
import {ButtonMain} from '../../../../../shared/ui/buttons';

const TODOEdit: FC = () => {
  const {TODOText, TODOId} = useSelectedTODO();
  const {TODOInputValue, handleSetTODOInputValue, handleClearTODOInputValue, handleEditTODO} = useTODOEditForm();
  const isButtonDisabled = TODOInputValue.length === 0;

  const handleEditTODOButtonPress = useCallback(() => {
    TODOId && handleEditTODO(TODOId);
  }, [TODOId, handleEditTODO]);

  useEffect(() => {
    if (TODOText && TODOText.length > 0) {
      handleSetTODOInputValue(TODOText);
    }

    return () => {
      handleClearTODOInputValue();
    };
  }, [TODOText, handleClearTODOInputValue, handleSetTODOInputValue]);

  return (
    <ComponentContainer>
      <TextInput
        multiline={false}
        autoFocus={true}
        autoCapitalize={'sentences'}
        value={TODOInputValue}
        onChangeText={handleSetTODOInputValue}
        style={styles.container}
        // keyboardType={'email-address'}
        // returnKeyType={'done'}
      />
      <ButtonMain
        onPress={handleEditTODOButtonPress}
        text={'Edit TODO'}
        disabled={isButtonDisabled}
        innerStyle={styles.button}
      />
    </ComponentContainer>
  );
};

export {TODOEdit};
