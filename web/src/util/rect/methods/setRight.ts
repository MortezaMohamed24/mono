import Rect from "../types";


function setRight(this: Rect, newRight: number) {
  this._left = newRight - this._width;
}


export default setRight;