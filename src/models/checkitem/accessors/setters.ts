import v from "src/models/checkitem/fields/validators";
import Checkitem from "src/models/checkitem";


export function content(this: Checkitem, content: Checkitem["content"]): Checkitem["content"] {
  return v.content(content);
}

export function isComplete(this: Checkitem, isComplete: Checkitem["isComplete"]): Checkitem["content"] {
  return v.isComplete(isComplete);
}


export default Object.freeze({content, isComplete});