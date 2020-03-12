import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookie from 'js-cookie';
import {
  ValidationProvider,
  extend,
  configure,
  // localize,
} from 'vee-validate';
// import { rules } from './rules';
// import { ko, en, cn } from './merge';

const en = require('@/i18n/en-US.json').validate;
const cn = require('@/i18n/zh-CN.json').validate;
const pt = require('@/i18n/pt-BR.json').validate;

// Object.keys(rules).forEach((key) => {
//   Validator.extend(key, rules[key]);
// });

// const config = {
//   locale: 'en',
//   dictionary: { ko, en, cn },
// };

// Vue.use(VeeValidate, config);

// localize({
//   ko: {
//     messages: {
//       initScriptName: ko.domain,
//     },
//   },
//   en: {
//     messages: {
//       initScriptName: en.domain,
//     },
//   },
//   cn: {
//     messages: {
//       initScriptName: cn.domain,
//     },
//   },
//   ja: {
//     messages: {
//       initScriptName: ja.domain,
//     },
//   },
// });

// Object.keys(rules).forEach((rule) => {
//   extend(rule, {
//     ...rules[rule], // copies rule configuration
//     message: messages[rule] // assign message
//   });
// });
const locale = Cookie.get('lang') || 'en-US';
const i18n = new VueI18n({
  locale,
  messages: {
    'en-US': en,
    'zh-CN': cn,
    'pt-BR': pt,
  },
});

configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid',
  },
  // this will be used to generate messages.
  defaultMessage: (_, values) => i18n.tc(`validations.${values._rule_}`, values),
});

extend('positive', (value) => {
  return value >= 0;
});

extend('initScriptName', {
  validate: (value: string): boolean => /^[a-zA-Z0-9_-]*$/g.test(value),
  message: i18n.tc('domain'),
});

Vue.component('ValidationProvider', ValidationProvider);
