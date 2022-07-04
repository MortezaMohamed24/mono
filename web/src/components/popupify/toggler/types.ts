import {ID} from "../state";
import React from "react";
import {Payloads} from "../state";


export type PopupTogglerMeta = {
  node?: HTMLButtonElement | null
}

export type PopupTogglerAction = 
  | "open" 
  | "join" 
  | "close" 
  | "toggle" 
  | "forward" 
  | "backward"

  
export type PopupTogglerProps<TID extends ID, TAction extends PopupTogglerAction> = 
  & NativeProps
  & StaticProps<TAction>
  & FlexableProps<TID, TAction>


type NativeProps = React.AllHTMLAttributes<
  HTMLButtonElement
>

type StaticProps<TAction extends PopupTogglerAction> = {
  meta?: PopupTogglerMeta | undefined;
  action?: TAction | undefined; 
  zIndex?: number | undefined;
  reference?: string | undefined;
  className?: string | undefined;
}

type FlexableProps<TID extends ID, TAction extends PopupTogglerAction> = (
  /** 
   * These actinos might have payloads, so, to infer the payload's type,
   * the target popup's id is required.
   */
  TAction extends "open" | "join" | "toggle" | "forward" 
    ? Payloads[TID] extends undefined
      ? {
          target: TID;
          payload?: undefined;
        } 
      : {
          target: TID;
          payload: Payloads[TID];
        }
  /** 
   * The "close" and "backward" actions do not have payloads, 
   * therefor, we don't need the id to infer the payload's type. 
   * In this case, the `target` field defaults to the nearest enclosing
   * popup's id (via React Context)
  */
    : {
        target?: undefined | TID;
        payload?: undefined
      }
)