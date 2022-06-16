import {ID, State} from "../types";
import {selectOption} from "./selectOption";
import {CreateInstanceAction} from "../actions";


function createInstance(state: State, id: ID, {caption, options, selected, noOptionsMessage}: CreateInstanceAction["payload"]["data"]) {
  state[id] = {
    id: id, 
    options: options || [],
    caption: caption || "Select Item",
    selected: -1,
    noOptionsMessage: noOptionsMessage || "There are no options",
  };

  
  if (selected !== undefined) {
    selectOption(state, id, selected ?? -1);
  }
}


export {createInstance};
export default createInstance;