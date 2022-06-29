import List from "./Model.js"
import types from "./fields/types.js"
import {DATE_CREATED_ASCENDING} from "./fields/constants.js"


export function title(this: List, title: List["title"]): List["title"] {
  return types.title(title, {strict: true})
}

export function isWatched(this: List, isWatched: List["isWatched"]): List["isWatched"] {
  return types.isWatched(isWatched, {strict: true})
}

export function sortMethod(this: List, sortMethod: List["sortMethod"] = DATE_CREATED_ASCENDING): List["sortMethod"] {
  return types.sortMethod(sortMethod, {strict: true})
}


export default Object.freeze({title, isWatched, sortMethod})