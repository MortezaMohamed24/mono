/**
 * A RegExp matching a board documnt key;
 */
export const KEY = /^(id|url|title|theme|idUser|idLists|idLabels|isStarred|dateCreation|dateLastView|dateLastActivity)$/u;
/** 
 * A RegExp matching a board theme.
*/
export const THEME = /^(blue|cyan|dark|green|indigo|lime|orange|pink|purple|red|sky)$/u;
/** 
 * The minimum valid board title length.
*/
export const MIN_TITLE_LENGTH = 1;
/** 
 * The maximum valid board title length.
*/
export const MAX_TITLE_LENGTH = 300;


export default Object.freeze({
  KEY, 
  THEME, 
  MIN_TITLE_LENGTH, 
  MAX_TITLE_LENGTH,
});