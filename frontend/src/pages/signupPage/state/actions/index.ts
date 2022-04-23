import {O} from "ts-toolbelt";
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
  readonly error: unknown;
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

export const SignupActionPending = (): SignupPendingAction => ({
  type: SIGNUP_PENDING,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const SignupActionRejected = (error: SignupRejectedAction["error"]): SignupRejectedAction => ({
  type: SIGNUP_REJECTED,
  meta: undefined,
  error: error,
  payload: undefined,
});

export const SignupActionFulfilled = (): SignupFulfilledAction => ({
  type: SIGNUP_FULFILLED,
  meta: undefined,
  error: undefined,
  payload: undefined,
});


// ---------- ACTION CREATORES ALIASES

export const edit = EditAction;
export const clear = ClearAction;


export default Object.freeze({
  EDIT,
  CLEAR,
  SIGNUP_PENDING,
  SIGNUP_REJECTED,
  SIGNUP_FULFILLED,
  edit,
  clear,
  EditAction,
  ClearAction,
  SignupActionPending,
  SignupActionRejected,
  SignupActionFulfilled,
});