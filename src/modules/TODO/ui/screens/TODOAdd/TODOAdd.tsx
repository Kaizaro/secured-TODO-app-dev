import React, {FC, useEffect} from 'react';
import {ComponentContainer} from '../../../../../shared/ui';
import {TextInput} from 'react-native';
import {useSelectedTODO} from '../../../hooks';
import {useTODOEditForm} from '../../../hooks/useTODOEditForm';
import {TODOAddStyles as styles} from './TODOAdd.styles';
import {ButtonMain} from '../../../../../shared/ui/buttons';

const TODOAdd: FC = () => {
  const {TODOText} = useSelectedTODO();
  const {TODOInputValue, handleSetTODOInputValue, handleClearTODOInputValue, handleSaveTODOToList} = useTODOEditForm();
  const isButtonDisabled = TODOInputValue.length === 0;

  useEffect(() => {
    handleClearTODOInputValue();
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
        onPress={handleSaveTODOToList}
        text={'Save TODO'}
        disabled={isButtonDisabled}
        innerStyle={styles.button}
      />
    </ComponentContainer>
  );
};

export {TODOAdd};
