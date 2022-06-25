import Rect from "../types";


function constrainX(this: Rect, parent: Rect, offset: number = 0) {
  if (this.width + (offset * 2) > parent.width) {
    this.width = parent.width - (offset * 2);
  }
  if (this.left + offset < parent.left) {
    this.left = parent.left + offset;
  }
  if (this.right - offset > parent.right) {
    this.right = parent.right - offset;
  }
}


export default constrainX;