import Rect from "../types";


function constrainY(this: Rect, parent: Rect, offset: number = 0) {
  if (this.height + (offset * 2) > parent.height) {
    this.height = parent.height - (offset * 2);
  }
  if (this.top + offset < parent.top) {
    this.top = parent.top + offset;
  }
  if (this.bottom - offset > parent.bottom) {
    this.bottom = parent.bottom - offset;
  }
}
 
 
export default constrainY;