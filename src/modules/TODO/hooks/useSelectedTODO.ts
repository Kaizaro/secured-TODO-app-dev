import {useMemo} from 'react';
import {useAppSelector} from '../../../app/store/hooks';

const useSelectedTODO = () => {
  const selectedNote = useAppSelector((state) => state.TODO.selectedTODO);
  const noteId = useMemo(() => selectedNote?.id, [selectedNote?.id]);
  const noteTitle = useMemo(() => selectedNote?.title, [selectedNote?.title]);
  const noteText = useMemo(() => selectedNote?.text, [selectedNote?.text]);
  const noteUpdatedAt = useMemo(() => selectedNote?.updatedAt, [selectedNote?.updatedAt]);
  const isNoteSelected = useMemo(() => selectedNote?.isSelected, [selectedNote?.isSelected]);

  return {noteId, noteTitle, noteText, noteUpdatedAt, isNoteSelected};
};

export {useSelectedTODO};
