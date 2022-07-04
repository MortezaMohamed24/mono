import {v4} from "uuid";


/** 
 * Assigned to each `<Toggler />`'s rendered HTMLButtonElement as a `data-type` data attribute.
 * It distinguishes a `modulify`'s toggler from all other nodes in the DOM.
*/
export const TOGGLER_TYPE_ID = v4();