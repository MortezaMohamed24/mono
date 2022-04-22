import {O} from "ts-toolbelt";
import * as API from "/api/signup";
import {Errors} from "/api/signup";
import {GetState} from "/store";
import {Dispatch} from "/store";
import {SignupState} from "../state";


// ---------- ACTION TYPES


export const EDIT = "signup/edit";
export const CLEAR = "signup/clear";
export const SIGNUP_PENDING = "signup/signup/pending";
export const SIGNUP_REJECTED = "signup/signup/rejected";
export const SIGNUP_FULFILLED = "signup/signup/fulfilled";

export type EDIT = typeof EDIT
export type CLEAR = typeof CLEAR
export type SIGNUP_PENDING = typeof SIGNUP_PENDING
export type SIGNUP_REJECTED = typeof SIGNUP_REJECTED
export type SIGNUP_FULFILLED = typeof SIGNUP_FULFILLED


// ---------- ACTIONS

export type EditAction = {
  readonly type: EDIT;
  readonly meta: undefined;
  readonly error: undefined;
  readonly payload: O.Partial<SignupState, "deep">;
}

export type ClearAction = {
  readonly type: CLEAR;
  readonly meta: undefined;
  readonly error: undefined;
  readonly payload: undefined;
}

export type SignupPendingAction = {
  readonly type: SIGNUP_PENDING;
  readonly meta: undefined;
  readonly error: undefined;
  readonly payload: undefined;
}

export type SignupRejectedAction = {
  readonly type: SIGNUP_REJECTED;
  readonly meta: undefined;
  readonly error: Errors;
  readonly payload: undefined;
}

export type SignupFulfilledAction = {
  readonly type: SIGNUP_FULFILLED;
  readonly meta: undefined;
  readonly error: undefined;
  readonly payload: undefined;
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | EditAction
  | ClearAction
  | SignupPendingAction
  | SignupRejectedAction
  | SignupFulfilledAction

export type AllActions = {
  [EDIT]: EditAction;
  [CLEAR]: ClearAction;
  [SIGNUP_PENDING]: SignupPendingAction;
  [SIGNUP_REJECTED]: SignupRejectedAction;
  [SIGNUP_FULFILLED]: SignupFulfilledAction;
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

export const signupPending = (): SignupPendingAction => ({
  type: SIGNUP_PENDING,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const signupRejected = (error: SignupRejectedAction["error"]): SignupRejectedAction => ({
  type: SIGNUP_REJECTED,
  meta: undefined,
  error: error,
  payload: undefined,
});

export const signupFulfilled = (): SignupFulfilledAction => ({
  type: SIGNUP_FULFILLED,
  meta: undefined,
  error: undefined,
  payload: undefined,
});


// ---------- THUNKS

export const signup = (payload: API.Payload) => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState().sp;

  if ((
    state.status !== "idle"
  ) || (
    state.validity !== true
  )) {
    return;
  }

  dispatch(signupPending());

  try {
    await API.signup(payload)
    dispatch(signupFulfilled())
  } catch (e: any) {
    dispatch(signupRejected(e));
  }
};


export default Object.freeze({
  EDIT,
  CLEAR,
  SIGNUP_PENDING,
  SIGNUP_REJECTED,
  SIGNUP_FULFILLED,
  edit,
  clear,
  signupPending,
  signupRejected,
  signupFulfilled,
  signup,
})