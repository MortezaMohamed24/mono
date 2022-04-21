export const USERNAME = `^[a-zA-z_-]+$` as const;
export const PASSWORD = `^[\\w\\d _-]+$` as const;
export const INITIALS = `^[ABCDEFGHIJKLMNOPQRSTUVWXYZ]+$` as const;
export const LASTNAME = `^[\\w-]+$` as const;
export const FIRSTNAME = `^[\\w-]+$` as const;
export const MIN_USERNAME_LENGTH = 1 as const;
export const MAX_USERNAME_LENGTH = 50 as const;
export const MIN_PASSWORD_LENGTH = 15 as const;
export const MAX_PASSWORD_LENGTH = 10000 as const;
export const MIN_INITIALS_LENGTH = 1 as const;
export const MAX_INITIALS_LENGTH = 2 as const;
export const MIN_LASTNAME_LENGTH = 1 as const;
export const MAX_LASTNAME_LENGTH = 15 as const;
export const MIN_FIRSTNAME_LENGTH = 1 as const;
export const MAX_FIRSTNAME_LENGTH = 15 as const;


export default Object.freeze({
  USERNAME, 
  PASSWORD, 
  INITIALS, 
  LASTNAME, 
  FIRSTNAME, 
  MIN_USERNAME_LENGTH, 
  MAX_USERNAME_LENGTH, 
  MIN_PASSWORD_LENGTH, 
  MAX_PASSWORD_LENGTH, 
  MIN_INITIALS_LENGTH, 
  MAX_INITIALS_LENGTH, 
  MIN_LASTNAME_LENGTH, 
  MAX_LASTNAME_LENGTH, 
  MIN_FIRSTNAME_LENGTH, 
  MAX_FIRSTNAME_LENGTH, 
});