import Cookie from 'js-cookie';

export const LANGUAGE = Cookie.get('lang') || 'en-US';

export const LANGUAGE_LIST = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' },
  { value: 'pt-BR', label: 'Português' },
];
