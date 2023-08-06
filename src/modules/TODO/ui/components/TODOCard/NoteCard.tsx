import React, {FC, useCallback} from 'react';
import {Card} from '../../../../../shared/ui/card/Card';
import {INoteCard} from './NoteCard.types';
import {RegularText, ThinText} from '../../../../../shared/ui';
import {noteCardStyles as styles} from './NoteCard.styles';
import {APP_COLORS} from '../../../../../app/theme';
import {useTODOList} from '../../../hooks';

const NoteCard: FC<INoteCard> = ({note, innerStyle}) => {
  const {handleSelectTODO} = useTODOList();

  const handleCardPress = useCallback(() => {
    handleSelectTODO(note);
  }, [handleSelectTODO, note]);

  return (
    <Card innerStyle={innerStyle} handleCardPress={handleCardPress}>
      <RegularText innerStyle={styles.text}>{note.text}</RegularText>
      <ThinText innerStyle={styles.date} color={APP_COLORS.GRAY}>
        {note.updatedAt}
      </ThinText>
    </Card>
  );
};

export {NoteCard};
