import {v4} from "uuid";
import {ID} from "../state";
import React from "react";
import state from "../state";
import {useRef} from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useContext} from "react";
import {useDispatch} from "/store";
import {PopupContext} from "../context";
import {TOGGLER_TYPE_ID} from "./constants";
import {PopupTogglerProps} from "./types";
import {PopupTogglerAction} from "./types";


function Toggler<TID extends ID, TAction extends PopupTogglerAction>(props: PopupTogglerProps<TID, TAction>) {
  const [id] = useState(v4);
  const self = useRef<HTMLButtonElement | null>(null);
  const context = useContext(PopupContext);
  const dispatch = useDispatch();


  const {
    meta,
    target = context?.id,
    zIndex,
    action = "toggle",
    payload,
    reference = `[data-id="${id}"]`,
    ...restProps
  } = props;


  function onClick() {
    if (target) {
      switch (action) {
        case "open": 
          dispatch(state.open<TID>({id: target, zIndex: zIndex, payload: payload, reference: reference} as any));
          break;
        
        case "join": 
          dispatch(state.join({id: target, zIndex: zIndex, payload: payload, reference: reference} as any));
          break;
        
        case "close": 
          dispatch(state.close({id: target}));
          break;
        
        case "toggle": 
          dispatch(state.toggle({id: target, zIndex: zIndex, payload: payload, reference: reference} as any));
          break;
        
        case "forward": 
          dispatch(state.toggle({id: target, zIndex: zIndex, payload: payload, reference: reference} as any));
          break;
      }
    }
  }

  function onClickWrapper(event: React.MouseEvent<HTMLButtonElement>) {
    onClick();
    props.onClick?.(event);
  }

  
  useEffect(() => {
    if (meta) {
      meta.node = self.current;
    }
  });


  return (
    <button  
      {...restProps}
      ref={self} 
      type="button"
      onClick={onClickWrapper}
      data-id={id}
      data-type={TOGGLER_TYPE_ID}
    />
  );
}


export const PopupToggler = React.memo(Toggler);