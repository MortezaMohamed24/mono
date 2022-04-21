import Rect from "../types";


function constrain(this: Rect, parent: Rect, offset: [number, number] = [0, 0]) {
  this.constrainX(parent, offset[0]);
  this.constrainY(parent, offset[1]);
}


export default constrain;