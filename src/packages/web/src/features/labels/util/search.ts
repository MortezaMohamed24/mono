import {LabelNative} from "../entity";
import {objectSearch} from "search-filterer";


type Array = readonly LabelNative[]
type Object = { readonly [key: string]: LabelNative}

function search(query: string, labels: Array): Array;
function search(query: string, labels: Object): Object;
function search(query: string, labels: Array | Object): Array | Object {
  if (!query) {
    return labels;
  } else if (Array.isArray(labels)) {
    return objectSearch(query, ["name", "color"], labels);
  } else {
    return objectSearch(query, ["name", "color"], Object.values(labels));
  }
}


export default search;