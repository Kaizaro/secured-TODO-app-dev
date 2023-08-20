import {fetchAPI} from '../../../../app/API';
import {generateEndpointHelper} from '../../API';

export const getTODOList = async () => {
  const endpoint = generateEndpointHelper('get-todo-list');
  return await fetchAPI.get(endpoint);
};
