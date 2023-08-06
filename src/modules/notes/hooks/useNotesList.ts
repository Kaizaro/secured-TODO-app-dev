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

  const handleRemoveNoteFromList = useCallback(() => {

  }, []);

  return {notesList, handleAddNoteToList, handleRemoveNoteFromList};
};

export {useNotesList};
