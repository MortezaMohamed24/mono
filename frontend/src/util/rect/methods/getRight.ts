import Rect from "../types";


function getRight(this: Rect) { 
  return this._left + this._width; 
}


export default getRight;