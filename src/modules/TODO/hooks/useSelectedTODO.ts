import {useMemo} from 'react';
import {useAppSelector} from '../../../app/store/hooks';

const useSelectedTODO = () => {
  const selectedTODO = useAppSelector((state) => state.TODO.selectedTODO);
  const TODOId = useMemo(() => selectedTODO?.id, [selectedTODO?.id]);
  const TODOText = useMemo(() => selectedTODO?.text, [selectedTODO?.text]);
  const TODOUpdatedAt = useMemo(() => selectedTODO?.updatedAt, [selectedTODO?.updatedAt]);
  const isTODOSelected = useMemo(() => selectedTODO?.isSelected, [selectedTODO?.isSelected]);

  return {TODOId, TODOText, TODOUpdatedAt, isTODOSelected};
};

export {useSelectedTODO};
