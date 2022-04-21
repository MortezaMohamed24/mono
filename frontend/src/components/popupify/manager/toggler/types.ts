import React from "react";
import {AnyID} from "../namespace";
import {Payloads} from "../namespace";


export type Meta = {
  node?: HTMLButtonElement | null
}

export type Props<ID extends AnyID, Action extends AnyAction> = 
  React.AllHTMLAttributes<HTMLButtonElement> & ({
    meta?: Meta | undefined;
    action?: Action | undefined; 
    zIndex?: number | undefined;
    reference?: string | undefined;
    className?: string | undefined;
  }) & (
  /** 
   * we need the requested popup's id to infer its payload.
   */
  Action extends "close" | "backward"
    /**
     * But, since `close` and `backward` events don't require payloads, the 
     * id is optional here and defaults the nearest enclosing popup's id 
     * (which is done using context).
     */
    ? {target?: undefined | null | ID, payload?: undefined | null}
    /** Other request types require payloads */
    : Payloads[ID] extends undefined | null
      /** 
       * If the module doesn't require any payload, optionalize the 
       * `payload` property so the requester doesn't have to explictly write `payload: null` 
       */
      ? {target: ID, payload?: undefined | null} 
      /** else, require `payload` */
      : {target: ID, payload: Payloads[ID]}
)
  
export type AnyAction = "open" | "join" | "close" | "toggle" | "forward" | "backward"