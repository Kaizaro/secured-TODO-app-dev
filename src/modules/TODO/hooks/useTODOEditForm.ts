import {useCallback} from 'react';
import uuid from 'react-native-uuid';

import {useAppDispatch, useAppSelector} from '../../../app/store/hooks';
import {TODOFormSliceActions} from '../DAL/TODOFormSlice';
import {useTODOList} from './useTODOList';
import dayjs from 'dayjs';
import {routeBack} from '../../../app/navigation';

export const useTODOEditForm = () => {
  const dispatch = useAppDispatch();
  const {handleAddTODOToList} = useTODOList();
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
    handleAddTODOToList({id, text: TODOInputValue, updatedAt: dayjs().format('YYYY/MM/DD HH:mm'), isSelected: false});
    routeBack();
  }, [TODOInputValue, handleAddTODOToList]);

  return {TODOInputValue, handleSetTODOInputValue, handleClearTODOInputValue, handleSaveTODOToList};
};
