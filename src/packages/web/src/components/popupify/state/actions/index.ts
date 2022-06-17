import {ID} from "../types";
import {Payloads} from "../types";


// ---------- ACTION TYPES

export type OPEN = typeof OPEN;
export type JOIN = typeof JOIN;
export type CLOSE = typeof CLOSE;
export type TOGGLE = typeof TOGGLE;
export type FORWARD = typeof FORWARD;
export type BACKWARD = typeof BACKWARD;

export const OPEN = "popups/open";
export const JOIN = "popups/join";
export const CLOSE = "popups/close";
export const TOGGLE = "popups/toggle";
export const FORWARD = "popups/forward";
export const BACKWARD = "popups/backward";


// ---------- ACTIONS

export type PopupOpenAction<TID extends ID = ID> = {
  type: OPEN;
  meta: undefined;
  error: undefined;
  payload: {
    id: TID;
    zIndex?: undefined | number;
    payload: Payloads[TID];
    reference: string;
  };
}

export type PopupJoinAction<TID extends ID = ID> = {
  type: JOIN;
  meta: undefined;
  error: undefined;
  payload: {
    id: TID;
    zIndex?: undefined | number;
    payload: Payloads[TID];
    reference: string;
  };
}

export type PopupCloseAction<TID extends ID = ID> = {
  type: CLOSE;
  meta: undefined;
  error: undefined;
  payload: {
    id?: TID | undefined;
  };
}

export type PopupToggleAction<TID extends ID = ID> = {
  type: TOGGLE;
  meta: undefined;
  error: undefined;
  payload: {
    id: TID;
    zIndex?: undefined | number;
    payload: Payloads[TID];
    reference: string;
  };
}

export type PopupForwardAction<TID extends ID = ID> = {
  type: FORWARD;
  meta: undefined;
  error: undefined;
  payload: {
    id: TID;
    zIndex?: undefined | number;
    payload: Payloads[TID];
    reference: string;
  };
}

export type PopupBackwardAction<TID extends ID = ID> = {
  type: BACKWARD;
  meta: undefined;
  error: undefined;
  payload: {
    id: TID;
  };
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | PopupOpenAction
  | PopupJoinAction
  | PopupCloseAction
  | PopupToggleAction
  | PopupForwardAction
  | PopupBackwardAction 
  
export type AllActions = {
  [OPEN]: PopupOpenAction;
  [JOIN]: PopupJoinAction;
  [CLOSE]: PopupCloseAction;
  [TOGGLE]: PopupToggleAction;
  [FORWARD]: PopupForwardAction;
  [BACKWARD]: PopupBackwardAction; 
}


// ---------- ACTION CREATORS

export const PopupOpenAction = <TID extends ID = ID>(payload: PopupOpenAction<TID>["payload"]): PopupOpenAction<TID> => ({
  type: OPEN,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const PopupJoinAction = <TID extends ID = ID>(payload: PopupJoinAction<TID>["payload"]): PopupJoinAction<TID> => ({
  type: JOIN,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const PopupCloseAction = <TID extends ID = ID>(payload: PopupCloseAction<TID>["payload"]): PopupCloseAction<TID> => ({
  type: CLOSE,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const PopupToggleAction = <TID extends ID = ID>(payload: PopupToggleAction<TID>["payload"]): PopupToggleAction<TID> => ({
  type: TOGGLE,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const PopupForwardAction = <TID extends ID = ID>(payload: PopupForwardAction<TID>["payload"]): PopupForwardAction<TID> => ({
  type: FORWARD,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const PopupBackwardAction = <TID extends ID = ID>(payload: PopupBackwardAction<TID>["payload"]): PopupBackwardAction<TID> => ({
  type: BACKWARD,
  meta: undefined,
  error: undefined,
  payload: payload,
});


// ---------- ACTION CREATOR ALIASES

export const open = PopupOpenAction;
export const join = PopupJoinAction;
export const close = PopupCloseAction;
export const toggle = PopupToggleAction;
export const forward = PopupForwardAction;
export const backward = PopupBackwardAction;


export default Object.freeze({
  OPEN,
  JOIN,
  CLOSE,
  TOGGLE,
  FORWARD,
  BACKWARD,
  PopupOpenAction,
  PopupJoinAction,
  PopupCloseAction,
  PopupToggleAction,
  PopupForwardAction,
  PopupBackwardAction,
  open,
  join,
  close,
  toggle,
  forward,
  backward,
});