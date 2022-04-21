export type NOT_FOUND = typeof NOT_FOUND;
export type INVALID_TITLE = typeof INVALID_TITLE;
export type INVALID_THEME = typeof INVALID_THEME;
export type INVALID_IS_STARRED = typeof INVALID_IS_STARRED;


export const NOT_FOUND = "board: could not find board";
export const INVALID_TITLE = "board: invalid title";
export const INVALID_THEME = "board: invalid theme";
export const INVALID_IS_STARRED = "board: invalid isstarred";


export default Object.freeze({
  NOT_FOUND,
  INVALID_TITLE,
  INVALID_THEME,
  INVALID_IS_STARRED,
});