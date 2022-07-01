import types from "./fields/types.js"
import Checkitem from "./Model.js"


export function content(this: Checkitem, content: Checkitem["content"]): Checkitem["content"] {
  return types.content(content, {strict: true})
}

export function isComplete(this: Checkitem, isComplete: Checkitem["isComplete"]): Checkitem["isComplete"] {
  return types.isComplete(isComplete, {strict: true})
}


export default Object.freeze({content, isComplete})