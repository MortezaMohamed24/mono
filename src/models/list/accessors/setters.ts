import v from "src/models/list/fields/validators";
import List from "src/models/list";
import {DATE_CREATED_ASCENDING} from "../fields/constants.js";


export function title(this: List, title: List["title"]): List["title"] {
  return v.title(title);
}

export function isWatched(this: List, isWatched: List["isWatched"]): List["isWatched"] {
  return v.isWatched(isWatched);
}

export function sortMethod(this: List, sortMethod: List["sortMethod"] = DATE_CREATED_ASCENDING): List["sortMethod"] {
  const b = v.sortMethod(sortMethod);

  console.log(typeof v, ": ", v);

  return b;
}


export default Object.freeze({title, isWatched, sortMethod});