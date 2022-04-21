export type NOT_FOUND = typeof NOT_FOUND
export type INVALID_TITLE = typeof INVALID_TITLE
export type INVALID_IS_WATCHED = typeof INVALID_IS_WATCHED
export type INVALID_SORT_METHOD = typeof INVALID_SORT_METHOD


export const NOT_FOUND = "list: could not find list";
export const INVALID_TITLE = "list: invalid title";
export const INVALID_IS_WATCHED = "list: invalid iswatched";
export const INVALID_SORT_METHOD = "list: invalid sortmethod";


export default Object.freeze({
  INVALID_TITLE,
  INVALID_IS_WATCHED,
  INVALID_SORT_METHOD,
});