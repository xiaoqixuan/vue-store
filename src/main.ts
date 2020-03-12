import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import I18n from './i18n';
import { LANGUAGE } from '@/constants';
import './plugins/element';
import './validate';

Vue.config.productionTip = false;
const i18n = I18n;
i18n.locale = LANGUAGE;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
