/** 
 * A visibilty filter which specifies that all items should be visible 
*/
export const ALL = "ALL";
/** 
 * A RegExp matching a checklist document key
*/
export const KEY = /^(id|title|filter|idUser|idList|idCard|idBoard)$/u;
/** 
 * A RegExp matching a checklist's visiblity filter
*/
export const FILTER = /^ALL|INCOMPLETE$/u;
/** 
 * A visibilty filter which specifies that only incomplete items should be visible 
*/
export const INCOMPLETE = "INCOMPLETE";
/** 
* A checklist's minimum valid title length.
*/
export const MIN_TITLE_LENGTH = 1;
/** 
* A checklist's maximum valid title length.
*/
export const MAX_TITLE_LENGTH = 300;


export default Object.freeze({
  ALL, 
  KEY,
  FILTER, 
  INCOMPLETE, 
  MIN_TITLE_LENGTH, 
  MAX_TITLE_LENGTH, 
});