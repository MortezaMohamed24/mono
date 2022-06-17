import Rect from "../types";


function getCenterY(this: Rect) {
  return this._top + (this._height / 2);
}


export default getCenterY;