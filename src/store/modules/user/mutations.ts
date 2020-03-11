import { UserState } from './interface';

export default {
  setUsername(state:UserState, username:string) {
    state.username = username;
  },
};
