import {AxiosResponse} from 'axios';
import {fetchAPI} from '../../../../app/API';
import {generateEndpointHelper} from '../../API';
import {IGetTODOList} from './getTODOList.types';

export const getTODOList = async () => {
  try {
    const endpoint = generateEndpointHelper('get-todo-list');
    console.log(endpoint);
    return (await fetchAPI.get(endpoint)) as AxiosResponse<IGetTODOList>;
  } catch (error) {
    console.log(error);
  }
};
