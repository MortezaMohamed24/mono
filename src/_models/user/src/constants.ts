export const KEY = /^(id|avatar|idBoards|username|lastname|initials|password|firstname)$/u;
export const USERNAME_MIN_LENGTH = 1;
export const USERNAME_MAX_LENGTH = 30;
export const PASSWORD_MIN_LENGTH = 15;
export const PASSWORD_MAX_LENGTH = 1000;
export const INITIALS_MIN_LENGTH = 1;
export const INITIALS_MAX_LENGTH = 2;
export const LASTNAME_MIN_LENGTH = 1;
export const LASTNAME_MAX_LENGTH = 30;
export const FIRSTNAME_MIN_LENGTH = 1;
export const FIRSTNAME_MAX_LENGTH = 30;
export const USERNAME = new RegExp(`^[abcdefghijklmnopqrstuvwxyz_]{${USERNAME_MIN_LENGTH},${USERNAME_MAX_LENGTH}}$`, "ui");
export const PASSWORD = new RegExp(`^[\\w\\d _-]{${PASSWORD_MIN_LENGTH},${PASSWORD_MAX_LENGTH}}$`, "u");
export const INITIALS = new RegExp(`^[ABCDEFGHIJKLMNOPQRSTUVWXYZ]{${INITIALS_MIN_LENGTH},${INITIALS_MAX_LENGTH}}$`, "ui");
export const LASTNAME = new RegExp(`^[abcdefghijklmnopqrstuvwxyz_]{${LASTNAME_MIN_LENGTH},${LASTNAME_MAX_LENGTH}}$`, "ui");
export const FIRSTNAME = new RegExp(`^[abcdefghijklmnopqrstuvwxyz_]{${FIRSTNAME_MIN_LENGTH},${FIRSTNAME_MAX_LENGTH}}$`, "ui");


export default Object.freeze({
  KEY,
  USERNAME,
  PASSWORD,
  INITIALS,
  LASTNAME,
  FIRSTNAME,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  INITIALS_MIN_LENGTH,
  INITIALS_MAX_LENGTH,
  LASTNAME_MIN_LENGTH,
  LASTNAME_MAX_LENGTH,
  FIRSTNAME_MIN_LENGTH,
  FIRSTNAME_MAX_LENGTH,
});