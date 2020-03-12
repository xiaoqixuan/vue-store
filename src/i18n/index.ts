import Vue from 'vue';
import VueI18n from 'vue-i18n';

const en = require('./en-US.json');
const cn = require('./zh-CN.json');
const pt = require('./pt-BR.json');

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'en-US': en,
    'zh-CN': cn,
    'pt-BR': pt,
  },
});
