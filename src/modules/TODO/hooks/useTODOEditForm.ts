import {useCallback} from 'react';
import uuid from 'react-native-uuid';

import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {TODOFormSliceActions} from '../DAL/TODOFormSlice';
import {useTODOList} from './useTODOList';
import dayjs from 'dayjs';
import {routeBack} from '../../../app/navigation';

/**
 * Hook for work with TODO item
 */
export const useTODOEditForm = () => {
  const dispatch = useAppDispatch();
  const {handleAddTODOToList, handleEditTODOInList} = useTODOList();
  /**
   * Get TODOInputValue from store
   */
  const TODOInputValue = useAppSelector((state) => state.TODOForm.TODOInputValue);

  /**
   * handle changing TODO text in input field
   */
  const handleSetTODOInputValue = useCallback(
    (TODOText: string) => {
      dispatch(TODOFormSliceActions.setTODOInputValue(TODOText));
    },
    [dispatch],
  );

  /**
   * Clear text input field
   */
  const handleClearTODOInputValue = useCallback(() => {
    dispatch(TODOFormSliceActions.clearTODOInputValue());
  }, [dispatch]);

  /**
   * Method saving inputted TODO item and put it in store
   */
  const handleSaveTODOToList = useCallback(() => {
    const id = uuid.v4().toString();
    handleAddTODOToList({
      uuid: id,
      text: TODOInputValue,
      updatedAt: dayjs().format('YYYY/MM/DD HH:mm'),
      timestamp: dayjs().valueOf(),
    });
    routeBack();
  }, [TODOInputValue, handleAddTODOToList]);

  /**
   * Method get TODO item, modifying it and put modified item in store
   */
  const handleEditTODO = useCallback(
    (id: string) => {
      handleEditTODOInList({
        uuid: id,
        text: TODOInputValue,
        updatedAt: dayjs().format('YYYY/MM/DD HH:mm'),
        timestamp: dayjs().valueOf(),
      });
      routeBack();
    },
    [TODOInputValue, handleEditTODOInList],
  );

  return {
    TODOInputValue,
    handleSetTODOInputValue,
    handleClearTODOInputValue,
    handleSaveTODOToList,
    handleEditTODO,
  };
};
