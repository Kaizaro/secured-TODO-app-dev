import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {ITODO} from '../entities';
import {TODOSliceActions} from '../DAL';

const useNotesList = () => {
  const dispatch = useAppDispatch();
  const notesList = useAppSelector((state) => state.notes.TODOList);

  const handleAddNoteToList = useCallback(
    (note: ITODO) => {
      dispatch(TODOSliceActions.setNotesList([...notesList, note]));
    },
    [dispatch, notesList],
  );

  const handleSelectNote = useCallback(
    (note: ITODO) => {
      dispatch(TODOSliceActions.setSelectedNote(note));
    },
    [dispatch],
  );

  const handleRemoveNoteFromList = useCallback(
    (note: ITODO) => {
      // Try to find note index in notes list
      const noteIndex = notesList.findIndex((noteItem) => note.id === noteItem.id);

      // remove note by index from notes list
      const modifiedArray = notesList.splice(noteIndex, 1);
      dispatch(TODOSliceActions.setNotesList(modifiedArray));
    },
    [dispatch, notesList],
  );

  return {notesList, handleAddNoteToList, handleSelectNote, handleRemoveNoteFromList};
};

export {useNotesList};
