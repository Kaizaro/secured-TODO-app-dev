import {IDefaultFC} from '../../types';

export interface ICard extends IDefaultFC {
  handleCardPress?: () => void;
}
