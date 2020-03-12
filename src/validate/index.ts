import Vue from 'vue';
import {
  ValidationProvider,
  extend,
  configure,
} from 'vee-validate';
import { rules } from './rules';
import { messages } from './messages';

configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid',
  },
});

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    validate: rules[rule],
    message: messages[rule],
  });
});

Vue.component('ValidationProvider', ValidationProvider);
