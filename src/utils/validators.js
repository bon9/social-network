export const requiredField = value => (value ? undefined : "Required");

export const minLength = minLength => value =>
  value && value.length >= minLength
    ? undefined
    : `Should be more than ${minLength}`;

export const maxLength = maxLength => value =>
  value && value.length <= maxLength
    ? undefined
    : `Should be smaller than ${maxLength}`;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
