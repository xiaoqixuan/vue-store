import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import I18n from './i18n';
import Cookie from 'js-cookie';
import './plugins/element';

Vue.config.productionTip = false;
const i18n = I18n;
const locale = Cookie.get('lang') || 'zh-CN';
i18n.locale = locale;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
