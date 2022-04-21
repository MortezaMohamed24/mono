import {O} from "ts-toolbelt";
import API from "/api/login";
import {Errors} from "/api/login";
import {Payload} from "/api/login";
import {Dispatch} from "/store";
import {GetState} from "/store";
import {LoginState} from "../state";


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
  error: Errors;
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

export const edit = (payload: EditAction["payload"]): EditAction => ({
  type: EDIT,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const clear = (): ClearAction => ({
  type: CLEAR,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const loginPending = (): LoginPendingAction => ({
  type: LOGIN_PENDING,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const loginRejected = (error: Errors): LoginRejectedAction => ({
  type: LOGIN_REJECTED,
  meta: undefined,
  error: error,
  payload: undefined,
});

export const loginFulfilled = (): LoginFulfilledAction => ({
  type: LOGIN_FULFILLED,
  meta: undefined,
  error: undefined,
  payload: undefined,
});


// ---------- THUNKS

export const login = (payload: Payload) => async (dispatch: Dispatch, getState: GetState) => {
  let state = getState().lg;

  if (state.status === "loading") {
    return;
  }


  dispatch(loginPending());

  
  try {
    await API.login(payload);
    dispatch(loginFulfilled());
  } catch (error: any) {
    dispatch(loginRejected(error));
  }
};



export default Object.freeze({
  EDIT,
  CLEAR,
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_FULFILLED,
  edit,
  clear,
  loginPending,
  loginRejected,
  loginFulfilled,
  login,
});