import {O} from "ts-toolbelt";
import {LoginState} from "../init";


// ---------- ACTION TYPES

export const EDIT = "login/edit";
export const CLEAR = "login/clear";
export const LOGIN_PENDING = "login/login/pending";
export const LOGIN_REJECTED = "login/login/rejected";
export const LOGIN_FULFILLED = "login/login/fulfilled";

export type EDIT = typeof EDIT
export type CLEAR = typeof CLEAR
export type LOGIN_PENDING = typeof LOGIN_PENDING
export type LOGIN_REJECTED = typeof LOGIN_REJECTED
export type LOGIN_FULFILLED = typeof LOGIN_FULFILLED


// ---------- ACTION TYPES

export type EditAction = {
  type: EDIT;
  meta: undefined;
  error: undefined;
  payload: O.Partial<LoginState, "deep">;
}

export type ClearAction = {
  type: CLEAR;
  meta: undefined;
  error: undefined;
  payload: undefined;
}

export type LoginPendingAction = {
  type: LOGIN_PENDING;
  meta: undefined;
  error: undefined;
  payload: undefined;
}

export type LoginRejectedAction = {
  type: LOGIN_REJECTED;
  meta: undefined;
  error: unknown;
  payload: undefined;
}

export type LoginFulfilledAction = {
  type: LOGIN_FULFILLED;
  meta: undefined;
  error: undefined;
  payload: undefined;
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | EditAction
  | ClearAction
  | LoginPendingAction
  | LoginRejectedAction
  | LoginFulfilledAction
 
export type AllActions = {
  [EDIT]: EditAction;
  [CLEAR]: ClearAction;
  [LOGIN_PENDING]: LoginPendingAction;
  [LOGIN_REJECTED]: LoginRejectedAction;
  [LOGIN_FULFILLED]: LoginFulfilledAction;
}


// ---------- ACTION CREATORS

export const EditAction = (payload: EditAction["payload"]): EditAction => ({
  type: EDIT,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const ClearAction = (): ClearAction => ({
  type: CLEAR,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const LoginActionPending = (): LoginPendingAction => ({
  type: LOGIN_PENDING,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const LoginActionRejected = (error: unknown): LoginRejectedAction => ({
  type: LOGIN_REJECTED,
  meta: undefined,
  error: error,
  payload: undefined,
});

export const LoginActionFulfilled = (): LoginFulfilledAction => ({
  type: LOGIN_FULFILLED,
  meta: undefined,
  error: undefined,
  payload: undefined,
});


// ---------- ACTION CREATORS ALIASES

export const edit = EditAction;
export const clear = ClearAction;



export default Object.freeze({
  EDIT,
  CLEAR,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_FULFILLED,
  edit,
  clear,
  EditAction,
  ClearAction,
  LoginActionPending,
  LoginActionRejected,
  LoginActionFulfilled,
});