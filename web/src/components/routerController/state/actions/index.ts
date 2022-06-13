import {AnyRequest} from "../../requests";


// ---------- ACTION TYPES

export const REQUEST_PENDING = "router/request/pending";
export const REQUEST_REJECTED = "router/request/rejected";
export const REQUEST_FULFILLED = "router/request/fulfilled";

export type REQUEST_PENDING = typeof REQUEST_PENDING
export type REQUEST_REJECTED = typeof REQUEST_REJECTED
export type REQUEST_FULFILLED = typeof REQUEST_FULFILLED


// ---------- ACTIONS

export type RouterRequestPendingAction = {
  type: REQUEST_PENDING;
  meta: Readonly<AnyRequest>;
  error: undefined;
  payload: undefined;
}

export type RouterRequestRejectedAction = {
  type: REQUEST_REJECTED;
  meta: Readonly<AnyRequest>;
  error: unknown;
  payload: undefined;
}

export type RouterRequestFulfilledAction = {
  type: REQUEST_FULFILLED;
  meta: Readonly<AnyRequest>;
  error: undefined;
  payload: undefined;
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | RouterRequestPendingAction
  | RouterRequestRejectedAction
  | RouterRequestFulfilledAction

export type AllActions = {
  [REQUEST_PENDING]: RouterRequestPendingAction;
  [REQUEST_REJECTED]: RouterRequestRejectedAction;
  [REQUEST_FULFILLED]: RouterRequestFulfilledAction;
}


// ---------- ACTION CREATORS

export const RequestPending = (meta: RouterRequestPendingAction["meta"]): RouterRequestPendingAction => ({
  type: REQUEST_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const RequestRejected = (meta: RouterRequestRejectedAction["meta"], error: unknown): RouterRequestRejectedAction => ({
  type: REQUEST_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const RequestFulfilled = (meta: RouterRequestFulfilledAction["meta"]): RouterRequestFulfilledAction => ({
  type: REQUEST_FULFILLED,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const navigate = RequestPending;


export default Object.freeze({
  navigate,
  REQUEST_PENDING,
  REQUEST_REJECTED,
  REQUEST_FULFILLED,
  RequestPending,
  RequestRejected,
  RequestFulfilled,
});