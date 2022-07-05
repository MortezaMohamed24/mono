import {State} from "../../types";
import {WILDCARD} from "../../../constants";
import {PopupCloseAction} from "../../actions";


function close({history}: State, {id = WILDCARD}: PopupCloseAction["payload"]) {
  if (id === WILDCARD) {
    history.clear();
  } 
  
  else {
    const index = history.indexOf(id);

    if (index !== -1) {
      history.clear(index);

      const last = history.last;

      if (last) {
        last.isOpen = true;
      }
    }
  }
}


export default close;