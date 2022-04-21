import {v4} from "uuid";

/** 
 * Creates a unique string to be used as the value of the `id` attribute 
 * of an HTML Element.
 */
export default () => `id-${v4()}`;