import {INote} from '../../../../entities';
import {IDefaultFC} from '../../../../../../shared/types';

export interface INoteCard extends IDefaultFC {
  note: INote;
}
