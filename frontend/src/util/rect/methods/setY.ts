import Rect from "../types";


/**
 * Moves a Rect on the y axis from its origin
 */
function setY(this: Rect, newY: number) {
  this._top = newY - this.y;
}


export default setY;