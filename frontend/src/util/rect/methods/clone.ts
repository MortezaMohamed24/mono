import Rect from "../types";
import prototype from ".";


function clone(this: Rect) {
  const other = Object.create(prototype);

  other._top = this._top;
  other._left = this._left;
  other._width = this._width;
  other._height = this._height;
  other._origin = this._origin;

  return other;
}


export default clone;