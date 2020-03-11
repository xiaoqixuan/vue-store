import $httpUser from '@/api/user';
import { SearchParams } from 'UserTypes';

export const actions = {
  queryLogsFromEs({ commit, rootState }: any, param: SearchParams) {
    return $httpUser.queryLogsFromEs(param, rootState.ncpHeader).then((data: any) => {
      const { result = {} } = data.data || {};
      const { totalCount = 0 } = result || {};
      commit('setTotalCount', totalCount);

      return data;
    });
  },
};
