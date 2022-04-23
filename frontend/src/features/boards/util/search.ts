import {BoardNative} from "../entity";
import {objectSearch} from "search-filterer";


type Array = ReadonlyArray<Readonly<BoardNative>>
type Object = Readonly<{[key: string]: Readonly<BoardNative>}>


function search(query: string, boards: Array | Object): Array {
  if (Array.isArray(boards)) {
    return objectSearch(query, ["title", "theme"], boards);
  } else {
    return objectSearch(query, ["title", "theme"], Object.values(boards));
  }
}


export default search;