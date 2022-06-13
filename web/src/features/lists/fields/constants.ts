/** 
 * A list's minimum valid title length
*/
export const MIN_TITLE_LENGTH = 1;
/** 
 * A list's maximum valid title length
*/
export const MAX_TITLE_LENGTH = 300;
/** 
 * A list sort method that sorts older cards before newer cards
*/
export const DATE_CREATED_ASCENDING = "DATE_CREATED_ASCENDING";
/** 
 * A list sort method that sorts newer cards before older cards
*/
export const DATE_CREATED_DESCENDING = "DATE_CREATED_DESCENDING";
/**
 * A list sort method that sorts cards alphabetically ascendingly: 
 * A card titled "Apha" sorts before a card titled "Beta"
 */
export const ALPHABETICALLY_ASCENDING = "ALPHABETICALLY_ASCENDING";
/**
 * A list sort method that sorts cards alphabetically descendingly: 
 * A card titled "Apha" sorts after a card titled "Beta"
 */
export const ALPHABETICALLY_DESCENDING = "ALPHABETICALLY_DESCENDING";
/**
 * A RegExp source matching a list sort method
*/
export const SORT_METHOD = `^(${DATE_CREATED_ASCENDING}|${DATE_CREATED_DESCENDING}|${ALPHABETICALLY_ASCENDING}|${ALPHABETICALLY_DESCENDING})$` as const;


export default Object.freeze({
  SORT_METHOD,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  DATE_CREATED_ASCENDING,
  DATE_CREATED_DESCENDING,
  ALPHABETICALLY_ASCENDING,
  ALPHABETICALLY_DESCENDING,
});