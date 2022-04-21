import Rect from "../types";


/**
 * Overrides a Rect's default origin point
 */
function setOrigin(this: Rect, point: [number, number]) {
  this._origin = point;
}


export default setOrigin;