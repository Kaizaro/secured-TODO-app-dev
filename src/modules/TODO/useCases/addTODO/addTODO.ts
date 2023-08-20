import {AxiosResponse} from 'axios';
import {fetchAPI} from '../../../../app/API';
import {generateEndpointHelper} from '../../API';

export const addTODO = async () => {
  try {
    const endpoint = generateEndpointHelper('post-todo-item');
    const params = {}
    console.log(endpoint);
    return (await fetchAPI.post(endpoint)) as AxiosResponse;
  } catch (error) {
    console.log(error);
  }
};
