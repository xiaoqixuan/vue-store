import { RootState } from './interface';

export default {
  CHANGE_LANGUAGE: (state: RootState, lang: string) => {
    state.lang = lang;
  },
  CHANGE_ROUTER_BASE: (state: RootState, routerBase: string) => {
    state.routerBase = routerBase;
  },
};
