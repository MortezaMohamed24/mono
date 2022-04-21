/** A RegExp matching a list document key. */
export const KEY = /^(id|title|idUser|idBoard|idCards|isWatched|sortMethod)$/u;
/** A RegExp matching a list sort method. */
export const SORT_METHOD = /^(DATE_CREATED_ASCENDING|DATE_CREATED_DESCENDING|ALPHABETICALLY_ASCENDING|ALPHABETICALLY_DESCENDING)$/g;
/** Minimum valid list title length. */
export const MIN_TITLE_LENGTH = 0;
/** Minimum valid list title length. */
export const MAX_TITLE_LENGTH = 300;
/**  A Cards sort method. */
export const DATE_CREATED_ASCENDING = "DATE_CREATED_ASCENDING";
/**  A Cards sort method. */
export const DATE_CREATED_DESCENDING = "DATE_CREATED_DESCENDING";
/**  A Cards sort method. */
export const ALPHABETICALLY_ASCENDING = "ALPHABETICALLY_ASCENDING";
/**  A Cards sort method. */
export const ALPHABETICALLY_DESCENDING = "ALPHABETICALLY_DESCENDING";

export default Object.freeze({
  SORT_METHOD,
  MIN_TITLE_LENGTH, 
  MAX_TITLE_LENGTH, 
  DATE_CREATED_ASCENDING, 
  DATE_CREATED_DESCENDING, 
  ALPHABETICALLY_ASCENDING, 
  ALPHABETICALLY_DESCENDING,
});