import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {INote} from '../entities';
import {notesSliceActions} from '../DAL';

const useNotesList = () => {
  const dispatch = useAppDispatch();
  const notesList = useAppSelector((state) => state.notes.notesList);

  const handleAddNoteToList = useCallback(
    (note: INote) => {
      dispatch(notesSliceActions.setNotesList([...notesList, note]));
    },
    [dispatch, notesList],
  );

  const handleSelectNote = useCallback(
    (note: INote) => {
      dispatch(notesSliceActions.setSelectedNote(note));
    },
    [dispatch],
  );

  const handleRemoveNoteFromList = useCallback(
    (note: INote) => {
      // Try to find note index in notes list
      const noteIndex = notesList.findIndex((noteItem) => note.id === noteItem.id);

      // remove note by index from notes list
      const modifiedArray = notesList.splice(noteIndex, 1);
      dispatch(notesSliceActions.setNotesList(modifiedArray));
    },
    [dispatch, notesList],
  );

  return {notesList, handleAddNoteToList, handleSelectNote, handleRemoveNoteFromList};
};

export {useNotesList};
