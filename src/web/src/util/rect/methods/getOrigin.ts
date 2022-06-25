import Rect from "../types";


/**
 * Returns a Rect's origin relative to the viewport
 */
function getAbsoluteOrigin(this: Rect) {
  return this._origin;
}


export default getAbsoluteOrigin;