import equals from "./equals";
import {Query} from "../../optionsListPopup/state/types";
import {Option} from "../../optionsListPopup/state/types";


type Argument = {
  query: Query;
  options: Option[];
  selected: number;
}

function indexOf({query, options, selected}: Argument) {
  const length = options.length;

  if (query === "prev") {
    return resolve(selected !== -1 ? selected + 1 : 0, length);
  } 
  
  if (query === "next") {
    return resolve(selected !== -1 ? selected - 1 : 0, length);
  } 

  if (typeof query === "number") {
    return resolve(query, length);
  }

  return resolve(options.findIndex(option => equals(option, query)), length);
}

function resolve(index: number, length: number) {
  if (length === 0) {
    return -1;
  } 
  
  if (index < 0) {
    return 0;
  } 
  
  if (index >= length) {
    return length - 1;
  }

  return index;
}


export default indexOf;