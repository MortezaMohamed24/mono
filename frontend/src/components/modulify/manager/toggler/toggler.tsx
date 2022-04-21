import {open} from "../actions";
import {close} from "../actions";
import {toggle} from "../actions";
import {forward} from "../actions";
import {backward} from "../actions";

import omit from "/util/object/omit";
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
import useListener from "/util/hooks/useListener";
import {useContext} from "react";
import {TOGGLER_TYPE_ID} from "./constants";


const Toggler = <ID extends AnyID, Action extends AnyAction>(props: Props<ID, Action>) => {
  const [id] = useState(v4);
  const self = useRef<HTMLButtonElement | null>(null);
  const context = useContext(Context);


  const rest = omit(["meta", "target", "action", "zIndex", "payload", "reference"], props);
  const meta = props.meta ?? {};
  const target = props.target ?? context?.id;
  const action = props.action ?? "toggle";
  const zIndex = props.zIndex;
  const payload = props.payload;
  const reference = (!props.reference || props.reference === "this") ? `[data-type=${id}]` : props.reference;


  const onClick = useListener<Event>(() => {
    if (target) {
      switch (action) {
        case "open": open({id: target as ID, zIndex, toggler: id, payload: payload as Payloads[ID], reference}); break;
        case "close": close(target); break;
        case "toggle": toggle({id: target as ID, zIndex, toggler: id, payload: payload as Payloads[ID], reference}); break;
        case "forward": forward({id: target as ID, zIndex, toggler: id, payload: payload as Payloads[ID], reference}); break;
        case "backward": backward(); break;
      }
    }
  });


  useEffect(() => {
    self.current?.addEventListener("click", onClick);
    return () => {
      self.current?.removeEventListener("click", onClick)
    };
  }, []);

  useEffect(() => {
    meta.node = self.current;
  });


  return (
    <button 
      {...rest} 
      ref={self} 
      type="button"
      data-id={id}
      data-type={TOGGLER_TYPE_ID}
    />
  );
};


export default Toggler;