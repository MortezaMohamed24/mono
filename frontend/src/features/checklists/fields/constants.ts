/** 
 * A checklist visibilty filter which specifies that all items should be visible
*/
export const ALL = "ALL";
/** 
 * A checklist visibilty filter which specifies that only incomplete items should be visible. 
*/
export const INCOMPLETE = "INCOMPLETE";
/** 
 * A RegExp source matching a checklist visiblity filter
*/
export const FILTER = `^${ALL}|${INCOMPLETE}$` as const;
/** 
 * The minimum number of digist a checklist's title can be
*/
export const MIN_TITLE_LENGTH = 1;
/** 
 * The maximum number of digist a checklist's title can be
*/
export const MAX_TITLE_LENGTH = 300;


export default Object.freeze({
  ALL,
  FILTER,
  INCOMPLETE,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
});