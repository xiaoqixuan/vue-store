import { getStringSize } from '@/utils';

export const rules = {
  customRegex: {
    getMessage: '',
    validate: (value: string, params: Array<{ regex: RegExp, message: string }>): boolean => params[0].regex.test(value),
  },
  englishStart: {
    getMessage: '',
    validate: (value: string): boolean => /^[a-zA-Z][a-zA-Z0-9-]*$/g.test(value),
  },
  englishStartUnderline: {
    getMessage: '',
    validate: (value: string): boolean => /^[a-zA-Z][a-zA-Z0-9_-]*$/g.test(value),
  },
  englishStartMidline: {
    getMessage: '',
    validate: (value: string): boolean => /^[a-zA-Z][a-zA-Z0-9-]*$/g.test(value),
  },
  lowerCaseEnglishStart: {
    getMessage: '',
    validate: (value: string): boolean => /^[a-z][a-z0-9-]*$/g.test(value),
  },
  englishOrNumbersEnd: {
    getMessage: '',
    validate: (value: string) :boolean => !/.*(-|_)$/g.test(value),
  },
  stringLength: {
    getMessage: '',
    validate: (value: string, range: Array<number>): boolean => {
      return range[0] <= value.length && value.length <= range[1];
    },
  },
  byteSize: {
    getMessage: '',
    validate: (value: string, maxSize: number): boolean => {
      return getStringSize(value) <= maxSize;
    },
  },
  startNumberExceed: {
    getMessage: '',
    validate: (value: string, inputNum: number): boolean => {
      return Number(value) <= 1000 - inputNum;
    },
  },
  isExist: {
    getMessage: '',
    validate: (value: string, list: Array<string>): boolean => {
      return list.indexOf(value) === -1;
    },
  },
  multiple: {
    getMessage: '',
    validate: (value: string, base: number): boolean => {
      return Number(value) % base === 0;
    },
  },
  isJson: {
    getMessage: '',
    validate: (provisioners: string): boolean => {
      if (typeof provisioners === 'string') {
        try {
          const obj = JSON.parse(provisioners);

          if (JSON.stringify(obj) === '{}' ||
            Object.prototype.toString.call(JSON.parse(JSON.stringify(obj))) === '[object Number]') {
            return false;
          }

          return true;
        } catch (e) {
          return false;
        }
      }

      return false;
    },
  },
  numberBetween: {
    getMessage: '',
    validate: (value, params): boolean => {
      if (params[2] === 'NONE') {
        return true;
      }
      if (value >= params[0] && value <= params[1]) {
        return true;
      }
      return false;
    },
  },
  initScriptName: {
    getMessage: '',
    validate: (value: string): boolean => !(/^[a-zA-Z0-9_-]*$/g.test(value)),
  },
  utf8: {
    getMessage: '',
    validate: (value: string): boolean => /^([\x01-\x7f]|[\xc0-\xdf][\x80-\xbf]|[\xe0-\xef][\x80-\xbf]{2}|[\xf0-\xf7][\x80-\xbf]{3}|[\xf8-\xfb][\x80-\xbf]{4}|[\xfc-\xfd][\x80-\xbf]{5})+$/.test(value),
  },
  checkInitScriptByteSize: {
    getMessage: '',
    validate: (value: string, maxSize: number): boolean => {
      return getStringSize(value) <= maxSize;
    },
  },
  storageSize: {
    getMessage: '',
    validate: (value: string, params: number): any => {
      const val = parseInt(value, 10);
      const { size = 0 } = params[0] || {};

      return {
        data: { size },
        valid: val >= 10 && val <= size,
      };
    },
  },
  integerMultiple: {
    getMessage: '',
    validate: (value, num): boolean => {
      return value % num[0] === 0;
    },
  },
};
