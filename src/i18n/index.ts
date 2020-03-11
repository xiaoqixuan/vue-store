import Vue from 'vue';
import VueI18n from 'vue-i18n';

const ko = require('./ko-KR.json');
const en = require('./en-US.json');
const cn = require('./zh-CN.json');
const ja = require('./ja-JP.json');

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    'ko-KR': ko,
    'en-US': en,
    'zh-CN': cn,
    'ja-JP': ja,
  },
});
