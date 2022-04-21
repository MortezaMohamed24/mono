export type NOT_FOUND = typeof NOT_FOUND;
export type INVALID_DUE = typeof INVALID_DUE;
export type INVALID_START = typeof INVALID_START;
export type INVALID_TITLE = typeof INVALID_TITLE;
export type INVALID_IS_WATCHED = typeof INVALID_IS_WATCHED;
export type INVALID_IS_COMPLETE = typeof INVALID_IS_COMPLETE;
export type INVALID_DESCRIPTION = typeof INVALID_DESCRIPTION;


export const NOT_FOUND = "card: could not find card";
export const INVALID_DUE = "card: invalid due";
export const INVALID_START = "card: invalid start";
export const INVALID_TITLE = "card: invalid title";
export const INVALID_IS_WATCHED = "card: invalid iswatched";
export const INVALID_IS_COMPLETE = "card: invalid iscomplete";
export const INVALID_DESCRIPTION = "card: invalid description";


export default Object.freeze({
  NOT_FOUND,
  INVALID_DUE,
  INVALID_START,
  INVALID_TITLE,
  INVALID_IS_WATCHED,
  INVALID_IS_COMPLETE,
  INVALID_DESCRIPTION,
});