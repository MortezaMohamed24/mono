import Rect from "../types";


/**
 * Moves a Rect on the x axis from its origin
 */
function setX(this: Rect, newX: number) {
  this._left = newX - this.x;
}


export default setX;