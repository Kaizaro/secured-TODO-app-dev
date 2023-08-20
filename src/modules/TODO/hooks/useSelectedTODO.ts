import {useMemo} from 'react';
import {useAppSelector} from '../../../app/store/hooks';

/**
 * Hook gets selectedTODO values and extract them
 */
const useSelectedTODO = () => {
  const selectedTODO = useAppSelector((state) => state.TODO.selectedTODO);
  const TODOId = useMemo(() => selectedTODO?.uuid, [selectedTODO?.uuid]);
  const TODOText = useMemo(() => selectedTODO?.text, [selectedTODO?.text]);
  const TODOUpdatedAt = useMemo(() => selectedTODO?.updatedAt, [selectedTODO?.updatedAt]);
  // const isTODOSelected = useMemo(() => selectedTODO?.isSelected, [selectedTODO?.isSelected]);

  return {TODOId, TODOText, TODOUpdatedAt};
};

export {useSelectedTODO};
