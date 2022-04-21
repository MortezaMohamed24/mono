import Rect from "./types";
import prototype from "./prototype";


function ElementRect(element: Element, origin?: [number, number]) {
  const rect = Object.create(prototype);
  const elementRect = element.getBoundingClientRect();


  rect._top = elementRect.top;
  rect._left = elementRect.left;
  rect._width = elementRect.width;
  rect._height = elementRect.height;  
  rect._origin = origin ?? [rect._left, rect._top];


  return rect as Rect;
}


export default ElementRect;