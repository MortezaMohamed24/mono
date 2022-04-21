import RectM from "./types";
import prototype from "./prototype";
import RectInitializer from "./types/rectInitializer";


type Rect = RectM

const Rect = (argument?: RectInitializer) => {
  const rect = Object.create(prototype);


  rect._top = argument?.top ?? 0;
  rect._left = argument?.left ?? 0;
  rect._width = argument?.width ?? 0;
  rect._height = argument?.height ?? 0;
  rect._origin = argument?.origin ?? [rect._left, rect._top];


  return rect as Rect;
}


export default Rect;