import Rect from "../types";


function getBottom(this: Rect) {
  return this._top + this._height;
}


export default getBottom;