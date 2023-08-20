import {ITODO} from '../../entities';

export interface IAddTODORequestParams {
  todoItem: ITODO;
}

export interface IAddTODOResponse {
  success: string;
}
