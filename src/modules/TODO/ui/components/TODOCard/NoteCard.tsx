import React, {FC, useCallback} from 'react';
import {Card} from '../../../../../shared/ui/card/Card';
import {INoteCard} from './NoteCard.types';
import {RegularText, ThinText} from '../../../../../shared/ui';
import {noteCardStyles as styles} from './NoteCard.styles';
import {APP_COLORS} from '../../../../../app/theme';
import {useTODOList} from '../../../hooks';
import {View} from 'react-native';
import {ButtonTransparent} from '../../../../../shared/ui/buttons';

const NoteCard: FC<INoteCard> = ({note, innerStyle}) => {
  const {handleSelectTODO, handleRemoveTODOFromList} = useTODOList();

  const handleCardPress = useCallback(() => {
    handleSelectTODO(note);
  }, [handleSelectTODO, note]);

  const handleRemoveButtonPress = useCallback(() => {
    handleRemoveTODOFromList(note);
  }, [handleRemoveTODOFromList, note]);

  return (
    <Card innerStyle={{...styles.noteCardContainer, ...innerStyle}} handleCardPress={handleCardPress}>
      <View style={styles.dataContainer}>
        <RegularText innerStyle={styles.text}>{note.text}</RegularText>
        <ThinText innerStyle={styles.date} color={APP_COLORS.GRAY}>
          {note.updatedAt}
        </ThinText>
      </View>
      <View style={styles.removeButtonTextContainer}>
        <ButtonTransparent
          onPress={handleRemoveButtonPress}
          text={'Remove'}
          textColor={APP_COLORS.RED}
          textStyle={styles.removeButtonText}
          borderColor={APP_COLORS.RED}
        />
      </View>
    </Card>
  );
};

export {NoteCard};
