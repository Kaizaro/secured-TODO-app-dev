import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {ITODO} from '../entities';
import {TODOSliceActions} from '../DAL';
import {ROOT_STACK, routeNavigate} from '../../../app/navigation';

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
      routeNavigate(ROOT_STACK.TODO_EDIT);
    },
    [dispatch],
  );

  const handleRemoveTODOFromList = useCallback(
    (note: ITODO) => {
      // Filter TODO list without TODO item which need to be deleted
      const filteredArray = TODOList.filter((state) => note.id !== state.id);
      dispatch(TODOSliceActions.setNotesList(filteredArray));
    },
    [dispatch, TODOList],
  );

  return {TODOList, handleAddTODOToList, handleSelectTODO, handleRemoveTODOFromList};
};

export {useTODOList};
