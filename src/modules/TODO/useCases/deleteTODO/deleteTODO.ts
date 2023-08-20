import {fetchAPI} from '../../../../app/API';
import {generateEndpointHelper} from '../../API';
import {IDeleteTODORequestParams, IDeleteTODOResponse} from './deleteTODO.types';

export const deleteTODO = async (todoUuid: string) => {
  try {
    const endpoint = generateEndpointHelper('post-todo-item');
    const params = {todoItemUuid: todoUuid};
    console.log(endpoint, params);
    return await fetchAPI.delete<IDeleteTODOResponse, IDeleteTODORequestParams>(endpoint, params);
  } catch (error) {
    console.log(error);
  }
};
