import s from "./style";
import React from "react";
import {useRef} from "react";
import {useEffect} from "react";
import {LabelNative} from "/features/labels/entity";


interface Props {
  name: LabelNative["name"];
  color: LabelNative["color"];
  className?: string | undefined;
}


function Label({name, color}: Props) {
  const self = useRef<HTMLParagraphElement | null>(null);

  
  useEffect(() => {
    self.current?.style.setProperty("--scroll-width", self.current.scrollWidth + "px");
  });


  return (<p ref={self} className={s[color]}>{name}</p>);
}



export default React.memo(Label);