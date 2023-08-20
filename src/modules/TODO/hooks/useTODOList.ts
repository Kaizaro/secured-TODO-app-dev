import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {ITODO} from '../entities';
import {TODOSliceActions} from '../DAL';
import {ROOT_STACK, routeNavigate} from '../../../app/navigation';
import {cloneDeep, isArray} from 'lodash';
import {getTODOList} from '../useCases';
import {addTODO} from "../useCases/addTODO";

/**
 * Hook with functions for work with TODO list
 */
const useTODOList = () => {
  const dispatch = useAppDispatch();
  /**
   * Get TODOList from store
   */
  const TODOList = useAppSelector((state) => state.TODO.TODOList);

  const fetchTODOList = useCallback(async () => {
    const response = await getTODOList();
    console.log(response);
    console.log(response?.data);

    if (response && isArray(response?.data.items)) {
      dispatch(TODOSliceActions.setNotesList(response.data.items));
    }
  }, [dispatch]);

  /**
   * handle dispatching new TODO item to store
   */
  const handleAddTODOToList = useCallback(
    async (todo: ITODO) => {
      const response = await addTODO(todo);
      if (response) {
        fetchTODOList();
      }
      // dispatch(TODOSliceActions.setNotesList([...TODOList, note]));
    },
    [fetchTODOList],
  );

  /**
   * handle editing TODO in store
   */
  const handleEditTODOInList = useCallback(
    (note: ITODO) => {
      const clonedTODOList = cloneDeep(TODOList);
      const noteIndex = clonedTODOList.findIndex((noteItem) => note.uuid === noteItem.uuid);
      clonedTODOList[noteIndex] = {...note};
      console.log('clonedTODOList', clonedTODOList);
      dispatch(TODOSliceActions.setNotesList(clonedTODOList));
    },
    [dispatch, TODOList],
  );

  /**
   * handle selecting of TODO
   */
  const handleSelectTODO = useCallback(
    (note: ITODO) => {
      dispatch(TODOSliceActions.setSelectedNote(note));
      routeNavigate(ROOT_STACK.TODO_EDIT);
    },
    [dispatch],
  );

  /**
   * handle removing of TODO from store
   */
  const handleRemoveTODOFromList = useCallback(
    (note: ITODO) => {
      // Filter TODO list without TODO item which need to be deleted
      const filteredArray = TODOList.filter((state) => note.uuid !== state.uuid);
      dispatch(TODOSliceActions.setNotesList(filteredArray));
    },
    [dispatch, TODOList],
  );

  return {
    TODOList,
    fetchTODOList,
    handleAddTODOToList,
    handleEditTODOInList,
    handleSelectTODO,
    handleRemoveTODOFromList,
  };
};

export {useTODOList};
