import {ITODO} from '../../entities';

/**
 * interface for TODO slice
 */
export interface ITODOSlice {
  TODOList: ITODO[];
  selectedTODO: ITODO | null;
}
