export type NOT_FOUND = typeof NOT_FOUND;
export type INVALID_AVATAR = typeof INVALID_AVATAR;
export type INVALID_USERNAME = typeof INVALID_USERNAME;
export type INVALID_PASSWORD = typeof INVALID_PASSWORD;
export type INVALID_INITIALS = typeof INVALID_INITIALS;
export type INVALID_LASTNAME = typeof INVALID_LASTNAME;
export type INVALID_FIRSTNAME = typeof INVALID_FIRSTNAME;
export type UNAVAILABLE_USERNAME = typeof UNAVAILABLE_USERNAME;


export const NOT_FOUND = "user: coukd not find user";
export const INVALID_AVATAR = "user: invalid avatar";
export const INVALID_USERNAME = "user: invalid username";
export const INVALID_PASSWORD = "user: invalid password";
export const INVALID_INITIALS = "user: invalid initials";
export const INVALID_LASTNAME = "user: invalid last name";
export const INVALID_FIRSTNAME = "user: invalid first name";
export const UNAVAILABLE_USERNAME = "user: unavailable username";


export default Object.freeze({
  NOT_FOUND,
  INVALID_AVATAR,
  INVALID_USERNAME,
  INVALID_PASSWORD,
  INVALID_INITIALS,
  INVALID_LASTNAME,
  INVALID_FIRSTNAME,
  UNAVAILABLE_USERNAME,
});