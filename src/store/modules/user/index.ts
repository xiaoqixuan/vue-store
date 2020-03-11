import mutations from './mutations';

export default {
  mutations,
  namespaced: true,
  state() {
    return {
      username: '',
    };
  },
};
