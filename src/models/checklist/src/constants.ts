/** 
 * A visibilty filter which specifies that all items should be visible 
*/
export const ALL_FILTER = "ALL"
/** 
 * A RegExp matching a checklist document key
*/
export const KEY_PATTERN = /^(id|title|filter|idUser|idList|idCard|idBoard)$/u
/** 
 * A RegExp matching a checklist's visiblity filter
*/
export const FILTER_PATTERN = /^ALL|INCOMPLETE$/u
/** 
 * A visibilty filter which specifies that only incomplete items should be visible 
*/
export const INCOMPLETE_FILTER = "INCOMPLETE"
/** 
* A checklist's minimum valid title length.
*/
export const MIN_TITLE_LENGTH = 1
/** 
* A checklist's maximum valid title length.
*/
export const MAX_TITLE_LENGTH = 300


export default Object.freeze({
  ALL_FILTER, 
  KEY_PATTERN,
  FILTER_PATTERN, 
  INCOMPLETE_FILTER, 
  MIN_TITLE_LENGTH, 
  MAX_TITLE_LENGTH, 
})