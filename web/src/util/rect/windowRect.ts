import Rect from "./types";
import prototype from "./prototype";


function WindowRect(origin?: [number, number]) {
  const rect = Object.create(prototype);


  rect._top = 0;
  rect._left = 0;
  rect._width = window.innerWidth;
  rect._height = window.innerHeight;
  rect._origin = origin ?? [rect._left, rect._top];


  return rect as Rect;
}


export default WindowRect;