import {ID, State} from "../types";
import {selectOption} from "./selectOption";
import {EditInstanceAction} from "../actions";


function editInstance(state: State, id: ID, {caption, options, selected, noOptionsMessage}: EditInstanceAction["payload"]["edits"]) {
  const instance = state[id];

  if (instance) {
    if (caption) { 
      instance.caption = caption; 
    }

    if (options) { 
      instance.options = options;
      instance.selected = -1;
    }

    if (selected !== undefined) {
      selectOption(state, id, selected);
    }

    if (noOptionsMessage) { 
      instance.noOptionsMessage = noOptionsMessage; 
    }
  }
}


export {editInstance};
export default editInstance;