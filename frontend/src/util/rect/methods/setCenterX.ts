import Rect from "../types";


function setCenterX(this: Rect, newCenterX: number) {
  this._left = newCenterX - (this._width / 2);
}


export default setCenterX;