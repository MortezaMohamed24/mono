import {v4} from "uuid";
import {AnyID} from "./namespace";


/** 
 * All events we will dispatch are like this 
*/
type Event = CustomEvent<{matches: Matcher}>;
/** 
 * Windows should listen to the events the relevant WindowManager dispatches.
 * Normally, events are only target one/multiple specific windows. A listening
 * window should invoke `event.detail.match(idOfTheWindow)` to know whether it's
 * targeted by the event.
*/
interface Matcher {
  (id: AnyID): boolean;
}
/** 
 * When dispatched, the window for which `event.detail.match` returns `true`
 * should open itself, then, focus itself. focus is vital for the
 * window to be able to recieve key events (if it's interested in that)
*/
const OPEN: string = v4();
/** 
 * When dispatched, the window for which `event.detail.match` returns `true`
 * should blur and close itself.
*/
const CLOSE: string = v4();


function on(type: "open" | "close", listener: (event: Event) => void) {
  switch (type) {
    case "open": window.addEventListener(OPEN, listener as any); break;
    case "close": window.addEventListener(CLOSE, listener as any); break;
  }
}

function off(type: "open" | "close", listener: (event: Event) => void) {
  switch (type) {
    case "open": window.removeEventListener(OPEN, listener as any); break;
    case "close": window.removeEventListener(CLOSE, listener as any); break;
  }
}

function dispatch(type: string, matcher: Matcher) {
  window.dispatchEvent(new CustomEvent(type, {detail: {matches: matcher}}));
}


export {dispatch, OPEN, CLOSE, on, off, Event};
export default Object.freeze({dispatch, OPEN, CLOSE, on, off});