import {is} from "../matchers";
import {not} from "../matchers";
import idify from "./idify";
import {pop} from "../history";
import {get} from "../history";
import {OPEN} from "../events";
import {push} from "../history";
import {CLOSE} from "../events";
import {AnyID} from "../namespace";
import {clear} from "../history";
import {length} from "../history";
import {getLast} from "../history";
import {indexOf} from "../history";
import {Request} from "./request";
import {AnyEntry} from "../history";
import {dispatch} from "../events";
import {WILDCARD} from "../constants";


/**
 * - close all open modules
 * - clear history
 * - open the requested module
 * - push the requested module to history
 */
const open = <ID extends AnyID>({id, payload, zIndex, toggler}: Request<ID>) => {
  dispatch(CLOSE, not(id));
  clear();

  push(Object.freeze({ 
    id, 
    zIndex, 
    toggler,
    payload, 
    backwardable: false, 
  }));

  dispatch(OPEN, is(id));
};
/**
 * - if `id` is `WILDCARD`
 *   - clear `HISTORY`
 *   - close all open modules
 * - else 
 *   - if there is an open module with an id of `id`
 *     - remove it along with the ones opened after it from `HISTORY`
 *     - close it along with the ones opened after it
 *     - if `HISTORY` is not empty
 *       - open or re-open the module represented by the last entry in `HISTORY`
 */
const close = <ID extends AnyID>(id: ID) => {
  if (id === WILDCARD) {
    dispatch(CLOSE, is(idify(clear())));
  } 
  
  else {
    const index = indexOf(id);
    
    if (index !== -1) {
      dispatch(CLOSE, is(idify(clear(index))));

      const last = getLast();

      if (last) {
        dispatch(OPEN, is(last.id));
      }
    }
  }
};
/**
 * - if the requested module is closed
 *   - `open()` it
 * - else (which means it's open)
 *   - if it was opened by `request.toggler`
 *     - `close()` it 
 *   - else (which means it's being toggled by a toggler other than the one that opened it)
 *     - re`open()` it to allow it to rerender and get the new toggler's payload
 */
const toggle = <ID extends AnyID>(request: Request<ID>) => {
  const entry = get(request.id);

  // not being in `HISTORY` means it's closed
  if (!entry) {
    open(request);
  } 
  
  else {
    if (entry.toggler === request.toggler) {
      close(request.id);
    } else {
      open(request);
    }
  }
};
/**
 * - closes all open modules without clearing `HISTORY` (so you can `backward()` to them later)
 * - pushes the requested module to `HISTORY`
 * - opens the requested module 
 */
const forward = <ID extends AnyID>({id, payload, zIndex, toggler}: Request<ID>) => {
  dispatch(CLOSE, not(id));

  push(Object.freeze({ 
    id,
    zIndex, 
    toggler,
    payload, 
    
    backwardable: length() > 0, 
  }));

  dispatch(OPEN, is(id));
};
/**
 * if the history contains two entries or more:
 * - closes the active module 
 * - opens the one before it in `HISTORY`
 */
const backward = () => {
  if (length() >= 2) {
    dispatch(CLOSE, is((pop() as AnyEntry).id));
    dispatch(OPEN, is((getLast() as AnyEntry).id));
  }
};


export {open, close, toggle, forward, backward};
export default Object.freeze({open, close, toggle, forward, backward});