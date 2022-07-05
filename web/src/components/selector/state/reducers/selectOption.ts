import {ID, Query, State} from "../types";


function selectOption(state: State, id: ID, query: Query) {
  const instance = state[id];

  if (instance) {
    const selected = instance.selected;
    const options = instance.options;
    const length = options.length;

    if (query === "prev") {
      instance.selected = resolve(selected !== -1 ? selected + 1 : 0, length);
    } else if (query === "next") {
      instance.selected = resolve(selected !== -1 ? selected - 1 : 0, length);
    } else if (typeof query === "number") {
      instance.selected = resolve(query, length);
    } else {
      instance.selected = resolve(options.findIndex(option => equals(option, query)), length);
    }
  }
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

function equals(option: unknown, query: unknown) {
  if (option === query) {
    return true;
  }

  if ((
    typeof query === "object"
  ) && (
    typeof option === "object"
  ) && (
    query !== null
  ) && (
    option !== null
  )) {
    for (let key of Object.keys(query)) {
      if (equals((option as any)[key], (query as any)[key])) {
        return true;
      }
    }
  }

  return false;
} 


export {selectOption};
export default selectOption;