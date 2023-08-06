import {useMemo} from 'react';
import {useAppSelector} from '../../../app/store/hooks';

const useSelectedTODO = () => {
  const selectedTODO = useAppSelector((state) => state.TODO.selectedTODO);
  const noteId = useMemo(() => selectedTODO?.id, [selectedTODO?.id]);
  const noteText = useMemo(() => selectedTODO?.text, [selectedTODO?.text]);
  const noteUpdatedAt = useMemo(() => selectedTODO?.updatedAt, [selectedTODO?.updatedAt]);
  const isNoteSelected = useMemo(() => selectedTODO?.isSelected, [selectedTODO?.isSelected]);

  return {noteId, noteText, noteUpdatedAt, isNoteSelected};
};

export {useSelectedTODO};
