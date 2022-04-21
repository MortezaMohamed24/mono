import Rect from "..";


function relativify(this: Rect, other: Rect) {
  this._top = other._top - this._top;
  this._left = other._left - this._left;
}


export default relativify;