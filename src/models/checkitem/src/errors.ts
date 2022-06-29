export type NOT_FOUND = typeof NOT_FOUND
export type INVALID_CONTENT = typeof INVALID_CONTENT
export type INVALID_PROJECTOR = typeof INVALID_PROJECTOR
export type INVALID_IS_COMPLETE = typeof INVALID_IS_COMPLETE


export const NOT_FOUND = "checkitem: could not find checkitem"
export const INVALID_CONTENT = "checkitem: invalid content"
export const INVALID_PROJECTOR = "checkitem: invalid projector"
export const INVALID_IS_COMPLETE = "checkitem: invalid iscomplete"


export default Object.freeze({
  NOT_FOUND,
  INVALID_CONTENT, 
  INVALID_IS_COMPLETE,
})