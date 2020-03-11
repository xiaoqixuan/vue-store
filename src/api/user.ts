import { apiCreator } from './index';
import { Header } from 'CommonTypes';
import { SearchParams } from 'UserTypes';

export default {
  queryLogsFromEs(params: SearchParams, reHeader?: Header) {
    return apiCreator(reHeader).post('/search/queryLogsFromEs', params);
  },
  hasApproachKey(reHeader?: Header) {
    return apiCreator(reHeader).get('/job/objectstorage/hasApproachKey');
  },
};
