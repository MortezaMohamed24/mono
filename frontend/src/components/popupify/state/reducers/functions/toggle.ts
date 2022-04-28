import open from "./open";
import close from "./close";
import {State} from "../types";
import {PopupToggleAction} from "../actions";


function toggle({history}: State, payload: PopupToggleAction["payload"]) {
  const entry = history.find(payload.id);

  /** Not being in history means that the popup is not opened, so open it */
  if (!entry) {
    open({history}, payload);
  } 
  
  /** if it is in history, it might be either opened or closed */
  else {
    entry.isOpen 
      ? close({history}, payload) 
      : open({history}, payload);
  }
}


export default toggle;