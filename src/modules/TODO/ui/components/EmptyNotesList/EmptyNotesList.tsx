import React, {FC, useCallback} from 'react';
import {EmptyList} from '../../../../../shared/ui';
import {ROOT_STACK, routeNavigate} from '../../../../../app/navigation';
import {IDefaultFC} from '../../../../../shared/types';

// Const for render empty list message.
// If using localisation - needs to be changed to locale key.
const HARDCODED_empty_list_message = "The TODO list is empty. Let's try to add one";

const HARDCODED_empty_list_button = 'Add new TODO';

const EmptyNotesList: FC<IDefaultFC> = ({innerStyle}) => {
  const handleAddNewNoteButtonPress = useCallback(() => {
    routeNavigate(ROOT_STACK.TODO_ADD);
  }, []);

  return (
    <EmptyList
      message={HARDCODED_empty_list_message}
      buttonText={HARDCODED_empty_list_button}
      onButtonPress={handleAddNewNoteButtonPress}
      innerStyle={innerStyle}
    />
  );
};

export {EmptyNotesList};
