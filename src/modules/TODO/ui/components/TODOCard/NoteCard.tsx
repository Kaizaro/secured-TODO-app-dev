import React, {FC, useCallback} from 'react';
import {Card} from '../../../../../shared/ui/card/Card';
import {INoteCard} from './NoteCard.types';
import {BoldText, RegularText, ThinText} from '../../../../../shared/ui';
import {noteCardStyles as styles} from './NoteCard.styles';
import {APP_COLORS} from '../../../../../app/theme';
import {useTODOList} from '../../../hooks';

const NoteCard: FC<INoteCard> = ({note, innerStyle}) => {
  const {handleSelectNote} = useTODOList();

  const handleCardPress = useCallback(() => {
    handleSelectNote(note);
  }, [handleSelectNote, note]);

  return (
    <Card innerStyle={innerStyle} handleCardPress={handleCardPress}>
      <BoldText>{note.title}</BoldText>
      <RegularText innerStyle={styles.text}>{note.title}</RegularText>
      <ThinText innerStyle={styles.date} color={APP_COLORS.GRAY}>
        {note.updatedAt}
      </ThinText>
    </Card>
  );
};

export {NoteCard};
