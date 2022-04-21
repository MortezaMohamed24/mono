import Rect from "../types";


function getY(this: Rect) {
  return this._origin[1] - this._top;
}


export default getY;