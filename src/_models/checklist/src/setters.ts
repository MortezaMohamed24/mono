import types from "./fields/types.js"
import Checklist from "./Model.js"


const title = function(this: Checklist, title: Checklist["title"]): Checklist["title"] {
  return types.title(title, {strict: true})
}

const filter = function(this: Checklist, filter: Checklist["filter"]): Checklist["filter"] {
  return types.filter(filter, {strict: true}) as Checklist["filter"]
}


export default Object.freeze({title, filter})