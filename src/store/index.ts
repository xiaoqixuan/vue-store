import Vue from 'vue';
import Vuex from 'vuex';
import { LANGUAGE } from '@/constants';
import mutations from './mutations';
import getters from './getters';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  getters,
  state: {
    lang: LANGUAGE,
    routerBase: '',
  },
  modules: {
    user,
  },
});
