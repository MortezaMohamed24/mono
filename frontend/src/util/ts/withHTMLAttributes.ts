import React from "react";


export type WithHTMLAttributes<
  _Element extends Element, 
  _Object extends object,
> = Omit<
  React.AllHTMLAttributes<_Element>, 
  keyof _Object
> & _Object;


export default WithHTMLAttributes;