import {ID} from "../types";
import {Option} from "../types";


// ---------- ACTION TYPES

export const OPEN = "uiSelectorComponent/open";
export const CLOSE = "uiSelectorComponent/close";
export const SELECT = "uiSelectorComponent/select";

export type OPEN = typeof OPEN
export type CLOSE = typeof CLOSE
export type SELECT = typeof SELECT


// ---------- ACTIONS

export type SelectorOpenAction = {
  type: OPEN;
  meta: undefined;
  error: undefined;
  payload: {
    id: ID;
    options: Option[];
    reference: string;
  };
}

export type SelectorCloseAction = {
  type: CLOSE;
  meta: undefined;
  error: undefined;
  payload: {
    id: ID;
  };
}

export type SelectorSelectAction = {
  type: SELECT;
  meta: undefined;
  error: undefined;
  payload: {
    id: ID;
    index: number;
  };
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | SelectorOpenAction
  | SelectorCloseAction
  | SelectorSelectAction

export type AllActions = {
  [OPEN]: SelectorOpenAction;
  [CLOSE]: SelectorCloseAction;
  [SELECT]: SelectorSelectAction;
}


// ---------- ACTION CREATORS

export const SelectorOpenAction = (payload: SelectorOpenAction["payload"]): SelectorOpenAction => ({
  type: OPEN,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const SelectorCloseAction = (payload: SelectorCloseAction["payload"]): SelectorCloseAction => ({
  type: CLOSE,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const SelectorSelectAction = (payload: SelectorSelectAction["payload"]): SelectorSelectAction => ({
  type: SELECT,
  meta: undefined,
  error: undefined,
  payload: payload,
});


// ---------- ACTION CREATOR ALIASES

export const open = SelectorOpenAction;
export const close = SelectorCloseAction;
export const select = SelectorSelectAction;


export default Object.freeze({
  OPEN,
  CLOSE,
  SELECT,
  SelectorOpenAction,
  SelectorCloseAction,
  SelectorSelectAction,
  open,
  close,
  select,
});