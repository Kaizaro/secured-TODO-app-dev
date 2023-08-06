import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {ITODO} from '../entities';
import {TODOSliceActions} from '../DAL';
import {ROOT_STACK, routeNavigate} from '../../../app/navigation';
import { cloneDeep, drop } from "lodash";

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
      // Try to find note index in TODO list
      const noteIndex = TODOList.findIndex((noteItem) => note.id === noteItem.id);
      console.log('noteIndex', noteIndex);

      const array = drop(TODOList, noteIndex);

      // remove note by index from TODO list
      // let modifiedArray = cloneDeep(TODOList);
      // console.log('modifiedArray', modifiedArray);
      // modifiedArray = modifiedArray.splice(noteIndex, 1);
      // console.log('modifiedArray_splice', modifiedArray);
      // dispatch(TODOSliceActions.setNotesList(modifiedArray));
    },
    [dispatch, TODOList],
  );

  return {TODOList, handleAddTODOToList, handleSelectTODO, handleRemoveTODOFromList};
};

export {useTODOList};
