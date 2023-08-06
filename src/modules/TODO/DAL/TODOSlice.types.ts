import {ITODO} from '../entities';

export interface ITODOSlice {
  TODOList: ITODO[];
  selectedTODO: ITODO | null;
}
