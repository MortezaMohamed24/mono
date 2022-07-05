import Rect from "../types";


function setBottom(this: Rect, newBottom: number) {
  this._top = newBottom - this._height;
}


export default setBottom;