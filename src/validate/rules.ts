export const rules = {
  required: {
    validate: (value: string): boolean => !!value,
    computesRequired: true,
  },
  ipAddress: {
    validate: (value: string): boolean => /^[0-9.]+$/g.test(value),
  },
  initScriptName: {
    validate: (value: string): boolean => /^[a-zA-Z0-9_-]*$/g.test(value),
  },
};
