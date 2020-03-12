import _ from 'lodash';
import ko from 'vee-validate/dist/locale/ko';
import en from 'vee-validate/dist/locale/en';
import cn from 'vee-validate/dist/locale/zh_CN';
import { messages } from './messages';

_.merge(ko, messages.ko);
_.merge(en, messages.en);
_.merge(cn, messages.cn);

export { ko, en, cn };
