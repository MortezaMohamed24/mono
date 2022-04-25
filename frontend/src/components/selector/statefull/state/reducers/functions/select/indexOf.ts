import equals from "./equals";
import {Option} from "../../../types";


type Argument = {
  query: "prev" | "next" | Partial<Option>;
  options: Option[];
  selected: number;
}

function indexOf({query, options, selected}: Argument) {
  if (query === "prev") {
    return resolve(selected !== -1 ? selected + 1 : 0);
  } 
  
  if (query === "next") {
    return resolve(selected !== -1 ? selected - 1 : 0);
  } 
  
  else {
    return resolve(options.findIndex(option => equals(option, query)));
  }
}

function resolve({length, index}: any) {
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