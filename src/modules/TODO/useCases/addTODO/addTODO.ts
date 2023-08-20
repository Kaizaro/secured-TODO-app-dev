import {fetchAPI} from '../../../../app/API';
import {generateEndpointHelper} from '../../API';
import {IAddTODORequestParams, IAddTODOResponse} from './addTODO.types';
import {ITODO} from '../../entities';

export const addTODO = async (todo: ITODO) => {
  try {
    const endpoint = generateEndpointHelper('post-todo-item');
    const params = {todoItem: todo} as IAddTODORequestParams;
    console.log(endpoint, params);
    return await fetchAPI.post<IAddTODOResponse, IAddTODORequestParams>(endpoint, params);
  } catch (error) {
    console.log(error);
  }
};
