import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {ITODO} from '../entities';
import {TODOSliceActions} from '../DAL';

const useTODOList = () => {
  const dispatch = useAppDispatch();
  const TODOList = useAppSelector((state) => state.TODO.TODOList);

  const handleAddTODOToList = useCallback(
    (note: ITODO) => {
      dispatch(TODOSliceActions.setNotesList([...TODOList, note]));
    },
    [dispatch, TODOList],
  );

  const handleSelectTODO = useCallback(
    (note: ITODO) => {
      dispatch(TODOSliceActions.setSelectedNote(note));
    },
    [dispatch],
  );

  const handleRemoveTODOFromList = useCallback(
    (note: ITODO) => {
      // Try to find note index in TODO list
      const noteIndex = TODOList.findIndex((noteItem) => note.id === noteItem.id);

      // remove note by index from TODO list
      const modifiedArray = TODOList.splice(noteIndex, 1);
      dispatch(TODOSliceActions.setNotesList(modifiedArray));
    },
    [dispatch, TODOList],
  );

  return {TODOList, handleAddTODOToList, handleSelectTODO, handleRemoveTODOFromList};
};

export {useTODOList};
