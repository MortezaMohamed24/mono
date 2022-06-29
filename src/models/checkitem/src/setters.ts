import v from "./fields/types.js"
import Checkitem from "./Model.js"


export function content(this: Checkitem, content: Checkitem["content"]): Checkitem["content"] {
  return v.content(content, {strict: true})
}

export function isComplete(this: Checkitem, isComplete: Checkitem["isComplete"]): Checkitem["isComplete"] {
  return v.isComplete(isComplete, {strict: true})
}


export default Object.freeze({content, isComplete})