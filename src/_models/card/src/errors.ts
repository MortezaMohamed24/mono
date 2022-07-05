export type NOT_FOUND = typeof NOT_FOUND
export type INVALID_TITLE = typeof INVALID_TITLE
export type INVALID_DATE_DUE = typeof INVALID_DATE_DUE
export type INVALID_DATE_START = typeof INVALID_DATE_START
export type INVALID_IS_WATCHED = typeof INVALID_IS_WATCHED
export type INVALID_IS_COMPLETE = typeof INVALID_IS_COMPLETE
export type INVALID_DESCRIPTION = typeof INVALID_DESCRIPTION
export type INVALID_DATE_CREATION = typeof INVALID_DATE_CREATION
export type INVALID_DATE_LAST_VIEW = typeof INVALID_DATE_LAST_VIEW


export const NOT_FOUND = "card: could not find card"
export const INVALID_TITLE = "card: invalid title"
export const INVALID_DATE_DUE = "card: invalid date due"
export const INVALID_DATE_START = "card: invalid date start"
export const INVALID_IS_WATCHED = "card: invalid iswatched"
export const INVALID_IS_COMPLETE = "card: invalid iscomplete"
export const INVALID_DESCRIPTION = "card: invalid description"
export const INVALID_DATE_CREATION = "card: invalid date creation"
export const INVALID_DATE_LAST_VIEW = "card: invalid date last view"


export default Object.freeze({
  NOT_FOUND,
  INVALID_TITLE,
  INVALID_DATE_DUE,
  INVALID_DATE_START,
  INVALID_IS_WATCHED,
  INVALID_IS_COMPLETE,
  INVALID_DESCRIPTION,
  INVALID_DATE_CREATION,
  INVALID_DATE_LAST_VIEW,
})