import {open} from "../actions";
import {close} from "../actions";
import {toggle} from "../actions";
import {forward} from "../actions";
import {backward} from "../actions";

import {v4} from "uuid";
import React from "react";
import {AnyID} from "../namespace";
import {Props} from "./types";
import {useRef} from "react";
import {Context} from "./context";
import {Payloads} from "../namespace";
import {useState} from "react";
import {AnyAction} from "./types";
import {useEffect} from "react";
import {useContext} from "react";
import {TOGGLER_TYPE_ID} from "./constants";


const Toggler = <ID extends AnyID, Action extends AnyAction>(props: Props<ID, Action>) => {
  const [id] = useState(v4);
  const self = useRef<HTMLButtonElement | null>(null);
  const context = useContext(Context);

  let {
    meta = {},
    target = context?.id,
    action = "toggle",
    zIndex,
    payload,
    reference = "this",
    ...rest 
  } = props;


  if (reference === "this") {
    reference = `[data-id="${id}"]`;
  }


  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (target) {
      switch (action) {
        case "open": open({id: target as ID, zIndex, toggler: id, payload: payload as Payloads[ID], reference}); break;
        case "close": close(target as ID); break;
        case "toggle": toggle({id: target as ID, zIndex, toggler: id, payload: payload as Payloads[ID], reference}); break;
        case "forward": forward({id: target as ID, zIndex, toggler: id, payload: payload as Payloads[ID], reference}); break;
        case "backward": backward(); break;
      }
    }

    props.onClick?.(event);
  };


  useEffect(() => {
    meta.node = self.current;
  });


  return (
    <button  
      {...rest}
      ref={self} 
      type="button"
      onClick={onClick}
      data-id={id}
      data-type={TOGGLER_TYPE_ID}
    />
  );
};


export default Toggler;