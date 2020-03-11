import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  getters,
  state: {
    lang: 'en-US',
    routerBase: '',
  },
  modules: {
    user,
  },
});
