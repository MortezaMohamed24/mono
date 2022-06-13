/** 
 * A checkitem document key 
*/
export const KEY = /^(id|idUser|idList|idCard|idBoard|content|isComplete|idChecklist)$/u;
/**
 * The minimum valid content length
*/
export const MIN_CONTENT_LENGTH = 1;
/**
 * The maximum valid content length
*/
export const MAX_CONTENT_LENGTH = 3000;

export default Object.freeze({
  KEY,
  MIN_CONTENT_LENGTH, 
  MAX_CONTENT_LENGTH, 
});