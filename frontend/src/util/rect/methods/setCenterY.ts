import Rect from "../types";


function setCenterY(this: Rect, newCenteryY: number) {
  this._top = newCenteryY - (this._height / 2);
}


export default setCenterY;