import Rect from "../types";


function getX(this: Rect) {
  return this._origin[0] - this._left;
}


export default getX;