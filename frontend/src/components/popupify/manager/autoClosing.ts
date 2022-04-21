import stop from "/util/event/stop";
import pathOf from "/util/event/outerPathOf";
import {close} from "./actions";
import {length} from "./history";
import {getLast} from "./history";
import {TOGGLER_TYPE_ID} from "./toggler";


let enabled = false;


const autoClose = (event: MouseEvent) => {
  const entry = getLast();

  if(!entry) { 
    return; 
  }
  
  // if the click landed on a <Toggler />, do nothing and let
  // the toggler handle it.
  if ((
    event.target instanceof Element
  ) && (
    event.target?.getAttribute?.("data-type") === TOGGLER_TYPE_ID
  )) {
    return; 
  }

  // if it landed elsewhere in the popup Element of `entry`, 
  // do nothing.
  if (pathOf(event).find((node) => node.getAttribute("data-id") === entry.id)) {
    return;
  }

  // Now we are sure the click landed outside of the popup
  // on a non-toggler element. Stop the event and close the popup.
  stop(event);
  close(entry.id);
};

const enableAutoClosing = () => {
  if (!enabled && length() > 0) {
    window.addEventListener("click", autoClose, {capture: true});
    enabled = true;
  }
};

const disableAutoClosing = () => {
  if (enabled && length() === 0) {
    window.removeEventListener("click", autoClose, {capture: true});
    enabled = false;
  }
};


export {enableAutoClosing, disableAutoClosing};
export default Object.freeze({enableAutoClosing, disableAutoClosing});