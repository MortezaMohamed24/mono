import types from "./formats.js"
import Checkitem from "./Model.js"


export function content(this: Checkitem, content: Checkitem["content"]): Checkitem["content"] {
  return types.CONTENT(content, {strict: true})
}

export function isComplete(this: Checkitem, isComplete: Checkitem["isComplete"]): Checkitem["isComplete"] {
  return types.IS_COMPLETE(isComplete, {strict: true})
}


export default Object.freeze({content, isComplete})