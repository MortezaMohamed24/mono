export type NOT_FOUND = typeof NOT_FOUND
export type INVALID_TITLE = typeof INVALID_TITLE
export type INVALID_FILTER = typeof INVALID_FILTER
export type INVALID_PROJECTOR = typeof INVALID_PROJECTOR


export const NOT_FOUND = "checklist: could not find document"
export const INVALID_TITLE = "checklist: invalid title"
export const INVALID_FILTER = "checklist: invalid filter"
export const INVALID_PROJECTOR = "checklist: invalid projector"


export default Object.freeze({
  NOT_FOUND, 
  INVALID_TITLE, 
  INVALID_FILTER,
  INVALID_PROJECTOR,
})