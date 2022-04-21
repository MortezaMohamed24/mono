import Rect from "../types";


function getCenterX(this: Rect) {
  return this._left + (this._width / 2);
}


export default getCenterX;