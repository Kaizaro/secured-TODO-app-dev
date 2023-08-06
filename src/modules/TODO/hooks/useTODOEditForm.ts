import {useCallback} from 'react';
import uuid from 'react-native-uuid';

import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {TODOFormSliceActions} from '../DAL/TODOFormSlice';
import {useTODOList} from './useTODOList';
import dayjs from 'dayjs';
import {routeBack} from '../../../app/navigation';

export const useTODOEditForm = () => {
  const dispatch = useAppDispatch();
  const {handleAddTODOToList, handleEditTODOInList} = useTODOList();
  const TODOInputValue = useAppSelector((state) => state.TODOForm.TODOInputValue);

  const handleSetTODOInputValue = useCallback(
    (TODOText: string) => {
      dispatch(TODOFormSliceActions.setTODOInputValue(TODOText));
    },
    [dispatch],
  );

  const handleClearTODOInputValue = useCallback(() => {
    dispatch(TODOFormSliceActions.clearTODOInputValue());
  }, [dispatch]);

  const handleSaveTODOToList = useCallback(() => {
    const id = uuid.v4().toString();
    handleAddTODOToList({
      id,
      text: TODOInputValue,
      isSelected: false,
      updatedAt: dayjs().format('YYYY/MM/DD HH:mm'),
      timestamp: dayjs().valueOf(),
    });
    routeBack();
  }, [TODOInputValue, handleAddTODOToList]);

  const handleEditTODO = useCallback(() => {
    handleEditTODOInList({
      text: TODOInputValue,
      updatedAt: dayjs().format('YYYY/MM/DD HH:mm'),
      timestamp: dayjs().valueOf(),
    });
    routeBack();
  }, [TODOInputValue, handleEditTODOInList]);

  return {
    TODOInputValue,
    handleSetTODOInputValue,
    handleClearTODOInputValue,
    handleSaveTODOToList,
    handleEditTODO,
  };
};
