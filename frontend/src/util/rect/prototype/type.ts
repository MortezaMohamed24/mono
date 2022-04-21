import * as METHODS from "../methods";


export interface RectPrototype {
  get x(): number;
  set x(newOriginX: number);

  get y(): number;
  set y(newOriginY: number);

  get top(): number;
  set top(newTop: number); 

  get left(): number;
  set left(newLeft: number); 

  get right(): number;
  set right(newRight: number); 

  get bottom(): number;
  set bottom(newBottom: number); 

  get width(): number;
  set width(newWidth: number);

  get height(): number;
  set height(newHeight: number);

  get centerX(): number;
  set centerX(newCenterX: number);

  get centerY(): number;
  set centerY(newCenterY: number);

  set origin(newOrigin: [number, number]);
  get origin(): [number, number];

  clone: METHODS.clone;
  render: METHODS.render;
  constrain: METHODS.constrain;
  constrainX: METHODS.constrainX;
  constrainY: METHODS.constrainY;
  relativify: METHODS.relativify;
}


export default RectPrototype;