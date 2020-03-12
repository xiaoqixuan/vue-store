import { getStringSize } from '@/utils';

export const rules = {
  required: (value: string): boolean => !!value,
  ipAddress: (value: string): boolean => /^[0-9.]+$/g.test(value),
  initScriptName: (value: string): boolean => /^[a-zA-Z0-9_-]*$/g.test(value),
};
