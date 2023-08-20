import {AxiosResponse} from 'axios';
import {fetchAPI} from '../../../../app/API';
import {generateEndpointHelper} from '../../API';
import {IDeleteTODORequestParams, IDeleteTODOResponse} from './deleteTODO.types';

export const deleteTODO = async (todoUuid: string) => {
  try {
    const endpoint = generateEndpointHelper('post-todo-item');
    const params = {todoItemUuid: todoUuid} as IDeleteTODORequestParams;
    console.log(endpoint, params);
    return (await fetchAPI.post(endpoint, params)) as AxiosResponse<IDeleteTODOResponse>;
  } catch (error) {
    console.log(error);
  }
};
