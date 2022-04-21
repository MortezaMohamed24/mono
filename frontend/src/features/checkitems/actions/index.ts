import URLS from "../endpoints";
import {Oid} from "/util/idUtil";
import {OID} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {BOOLEAN} from "/util/formatter";
import {content} from "/checkitems/fields";
import ApiMutator from "/core/api/mutator";
import {isComplete} from "/checkitems/fields";


// ---------- UNPREPARED REQUEST METAS

export type CheckitemCreateRequestMetaUnprepared = {
  /** The checkitem's content. */
  readonly content: string;
  /** The id of the checklist for which to create a checkitem. */
  readonly idChecklist: string;
}


// ---------- PREPARED REQUEST METAS

export type CheckitemEditRequestMeta = {
  /** The new content for the checkitem */
  readonly content?: string;
  /** Whether the checkitem should set as complete */
  readonly isComplete?: boolean;
  /** The id of the checkitem to edit */
  readonly idCheckitem: string;
}

export type CheckitemMoveRequestMeta = {
  /** The new index in parent list to move checkitem to. */
  readonly index: number;
  /** The id of the checkitem to move. */
  readonly idCheckitem: string;
}

export type CheckitemCreateRequestMeta = CheckitemCreateRequestMetaUnprepared & {
  /** The id for the checkitem to create */
  readonly id: string;
}

export type CheckitemDestroyRequestMeta = {
  /** The id  of the checkitem to destroy. */
  readonly idCheckitem: string;
}


// ---------- REQUEST META PREPARERS

export const prepareCheckitemCreateRequestMeta = (meta: CheckitemCreateRequestMetaUnprepared): CheckitemCreateRequestMeta => ({
  ...meta,
  id: new Oid().toHexString(),
});


// ---------- REQUEST META FORMATTERS

export const formatAsCheckitemEditRequestMeta = OBJECT({
  content: content.copy({optional: true}),
  isComplete: BOOLEAN({optional: true}),
  idCheckitem: OID(),
}, {
  name: "CheckitemEditRequestMeta",
});

export const formatAsCheckitemMoveRequestMeta = OBJECT({
  name: "CheckitemMoveRequestMeta",
  content: {
    index: NUMBER({min: 0, name: "index"}),
    idCheckitem: OID(),
  }
});

export const formatAsCheckitemCreateRequestMeta = OBJECT({
  name: "CheckitemCreateRequestMeta",
  content: {
    id: OID(),
    content: content,
    idChecklist: OID(),
  },
});

export const formatAsCheckitemDestroyRequestMeta = OBJECT({
  name: "CheckitemDestroyRequestMeta",
  content: {
    idCheckitem: OID(),
  },
});


// ---------- REQUEST CREATORS

export const CheckitemMoveRequest = (meta: CheckitemMoveRequestMeta) => (
  new Request(URLS.MOVE, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const CheckitemEditRequest = (meta: CheckitemEditRequestMeta) => (
  new Request(URLS.EDIT, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const CheckitemCreateRequest = (meta: CheckitemCreateRequestMeta) => (
  new Request(URLS.CREATE, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const CheckitemDestroyRequest = (meta: CheckitemDestroyRequestMeta) => (
  new Request(URLS.DESTROY, {
    body: JSON.stringify(meta),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);


// ---------- RESPONSE BODIES

export type CheckitemEditResponseBody = undefined
export type CheckitemMoveResponseBody = undefined
export type CheckitemCreateResponseBody = undefined
export type CheckitemDestroyResponseBody = undefined


// ---------- ACTION TYPES

export const MOVE_PENDING = "checkitem/move/pending";
export const MOVE_REJECTED = "checkitem/move/rejected";
export const MOVE_FULFILLED = "checkitem/move/fulfilled";
export const EDIT_PENDING = "checkitem/edit/pending";
export const EDIT_REJECTED = "checkitem/edit/rejected";
export const EDIT_FULFILLED = "checkitem/edit/fulfilled";
export const CREATE_PENDING = "checkitem/create/pending";
export const CREATE_REJECTED = "checkitem/create/rejected";
export const CREATE_FULFILLED = "checkitem/create/fulfilled";
export const DESTROY_PENDING = "checkitem/destroy/pending";
export const DESTROY_REJECTED = "checkitem/destroy/rejected";
export const DESTROY_FULFILLED = "checkitem/destroy/fulfilled";


export type MOVE_PENDING = typeof MOVE_PENDING
export type MOVE_REJECTED = typeof MOVE_REJECTED
export type MOVE_FULFILLED = typeof MOVE_FULFILLED
export type EDIT_PENDING = typeof EDIT_PENDING
export type EDIT_REJECTED = typeof EDIT_REJECTED
export type EDIT_FULFILLED = typeof EDIT_FULFILLED
export type CREATE_PENDING = typeof CREATE_PENDING
export type CREATE_REJECTED = typeof CREATE_REJECTED
export type CREATE_FULFILLED = typeof CREATE_FULFILLED
export type DESTROY_PENDING = typeof DESTROY_PENDING
export type DESTROY_REJECTED = typeof DESTROY_REJECTED
export type DESTROY_FULFILLED = typeof DESTROY_FULFILLED


// ---------- ACTIONS

export type CheckitemEditPendingAction = {
  type: EDIT_PENDING;
  meta: CheckitemEditRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CheckitemEditRejectedAction = {
  type: EDIT_REJECTED;
  meta: CheckitemEditRequestMeta;
  error: unknown;
  payload: undefined;
}

export type CheckitemEditFulfilledAction = {
  type: EDIT_FULFILLED;
  meta: CheckitemEditRequestMeta;
  error: undefined;
  payload: CheckitemEditResponseBody;
}

export type CheckitemMovePendingAction = {
  type: MOVE_PENDING;
  meta: CheckitemMoveRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CheckitemMoveRejectedAction = {
  type: MOVE_REJECTED;
  meta: CheckitemMoveRequestMeta;
  error: unknown;
  payload: undefined;
}

export type CheckitemMoveFulfilledAction = {
  type: MOVE_FULFILLED;
  meta: CheckitemMoveRequestMeta;
  error: undefined;
  payload: CheckitemMoveResponseBody;
}

export type CheckitemCreatePendingAction = {
  type: CREATE_PENDING;
  meta: CheckitemCreateRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CheckitemCreateRejectedAction = {
  type: CREATE_REJECTED;
  meta: CheckitemCreateRequestMeta;
  error: unknown;
  payload: undefined;
}

export type CheckitemCreateFulfilledAction = {
  type: CREATE_FULFILLED;
  meta: CheckitemCreateRequestMeta;
  error: undefined;
  payload: CheckitemCreateResponseBody;
}

export type CheckitemDestroyPendingAction = {
  type: DESTROY_PENDING;
  meta: CheckitemDestroyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CheckitemDestroyRejectedAction = {
  type: DESTROY_REJECTED;
  meta: CheckitemDestroyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type CheckitemDestroyFulfilledAction = {
  type: DESTROY_FULFILLED;
  meta: CheckitemDestroyRequestMeta;
  error: undefined;
  payload: CheckitemDestroyResponseBody;
}

// ---------- GROUPED ACTIONS

export type AnyAction = 
  | CheckitemEditPendingAction
  | CheckitemEditRejectedAction
  | CheckitemEditFulfilledAction
  | CheckitemMovePendingAction
  | CheckitemMoveRejectedAction
  | CheckitemMoveFulfilledAction
  | CheckitemCreatePendingAction
  | CheckitemCreateRejectedAction
  | CheckitemCreateFulfilledAction
  | CheckitemDestroyPendingAction
  | CheckitemDestroyRejectedAction
  | CheckitemDestroyFulfilledAction

export type AllActions = {
  [EDIT_PENDING]: CheckitemEditPendingAction;
  [EDIT_REJECTED]: CheckitemEditRejectedAction;
  [EDIT_FULFILLED]: CheckitemEditFulfilledAction;  
  [MOVE_PENDING]: CheckitemMovePendingAction;
  [MOVE_REJECTED]: CheckitemMoveRejectedAction;
  [MOVE_FULFILLED]: CheckitemMoveFulfilledAction;
  [CREATE_PENDING]: CheckitemCreatePendingAction;
  [CREATE_REJECTED]: CheckitemCreateRejectedAction;
  [CREATE_FULFILLED]: CheckitemCreateFulfilledAction;
  [DESTROY_PENDING]: CheckitemDestroyPendingAction;
  [DESTROY_REJECTED]: CheckitemDestroyRejectedAction;
  [DESTROY_FULFILLED]: CheckitemDestroyFulfilledAction;
}


// ---------- ACTION CREATORS

export const CheckitemEditPendingAction = (meta: CheckitemEditRequestMeta): CheckitemEditPendingAction => ({
  type: EDIT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CheckitemEditRejectedAction = (meta: CheckitemEditRequestMeta, error: unknown): CheckitemEditRejectedAction => ({
  type: EDIT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const CheckitemEditFulfilledAction = (meta: CheckitemEditRequestMeta, payload: CheckitemEditResponseBody): CheckitemEditFulfilledAction => ({
  type: EDIT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CheckitemMovePendingAction = (meta: CheckitemMoveRequestMeta): CheckitemMovePendingAction => ({
  type: MOVE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CheckitemMoveRejectedAction = (meta: CheckitemMoveRequestMeta, error: unknown): CheckitemMoveRejectedAction => ({
  type: MOVE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const CheckitemMoveFulfilledAction = (meta: CheckitemMoveRequestMeta, payload: CheckitemMoveResponseBody): CheckitemMoveFulfilledAction => ({
  type: MOVE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CheckitemCreatePendingAction = (meta: CheckitemCreateRequestMeta): CheckitemCreatePendingAction => ({
  type: CREATE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CheckitemCreateRejectedAction = (meta: CheckitemCreateRequestMeta, error: unknown): CheckitemCreateRejectedAction => ({
  type: CREATE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const CheckitemCreateFulfilledAction = (meta: CheckitemCreateRequestMeta, payload: CheckitemCreateResponseBody): CheckitemCreateFulfilledAction => ({
  type: CREATE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CheckitemDestroyPendingAction = (meta: CheckitemDestroyRequestMeta): CheckitemDestroyPendingAction => ({
  type: DESTROY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CheckitemDestroyRejectedAction = (meta: CheckitemDestroyRequestMeta, error: unknown): CheckitemDestroyRejectedAction => ({
  type: DESTROY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const CheckitemDestroyFulfilledAction = (meta: CheckitemDestroyRequestMeta, payload: CheckitemDestroyResponseBody): CheckitemDestroyFulfilledAction => ({
  type: DESTROY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});


// ---------- THUNKS

export const move = ApiMutator<
  CheckitemMoveRequestMeta,
  CheckitemMoveResponseBody,
  CheckitemMovePendingAction,
  CheckitemMoveRejectedAction,
  CheckitemMoveFulfilledAction
>({
  request: CheckitemMoveRequest,
  pending: CheckitemMovePendingAction,
  rejected: CheckitemMoveRejectedAction,
  fulfilled: CheckitemMoveFulfilledAction,
});

export const edit = ApiMutator<
  CheckitemEditRequestMeta,
  CheckitemEditResponseBody,
  CheckitemEditPendingAction,
  CheckitemEditRejectedAction,
  CheckitemEditFulfilledAction
>({
  request: CheckitemEditRequest,
  pending: CheckitemEditPendingAction,
  rejected: CheckitemEditRejectedAction,
  fulfilled: CheckitemEditFulfilledAction,
});

export const create = ApiMutator<
  CheckitemCreateRequestMeta,
  CheckitemCreateResponseBody,
  CheckitemCreatePendingAction,
  CheckitemCreateRejectedAction,
  CheckitemCreateFulfilledAction,
  CheckitemCreateRequestMetaUnprepared
>({
  prepare: prepareCheckitemCreateRequestMeta,
  request: CheckitemCreateRequest,
  pending: CheckitemCreatePendingAction,
  rejected: CheckitemCreateRejectedAction,
  fulfilled: CheckitemCreateFulfilledAction,
});

export const destroy = ApiMutator<
  CheckitemDestroyRequestMeta,
  CheckitemDestroyResponseBody,
  CheckitemDestroyPendingAction,
  CheckitemDestroyRejectedAction,
  CheckitemDestroyFulfilledAction
>({
  request: CheckitemDestroyRequest,
  pending: CheckitemDestroyPendingAction,
  rejected: CheckitemDestroyRejectedAction,
  fulfilled: CheckitemDestroyFulfilledAction,
});


export default Object.freeze({
  prepareCheckitemCreateRequestMeta,
  formatAsCheckitemEditRequestMeta,
  formatAsCheckitemMoveRequestMeta,
  formatAsCheckitemCreateRequestMeta,
  formatAsCheckitemDestroyRequestMeta,
  CheckitemMoveRequest,
  CheckitemEditRequest,
  CheckitemCreateRequest,
  CheckitemDestroyRequest,
  MOVE_PENDING,
  MOVE_REJECTED,
  MOVE_FULFILLED,
  EDIT_PENDING,
  EDIT_REJECTED,
  EDIT_FULFILLED,
  CREATE_PENDING,
  CREATE_REJECTED,
  CREATE_FULFILLED,
  DESTROY_PENDING,
  DESTROY_REJECTED,
  DESTROY_FULFILLED,
  CheckitemEditPendingAction,
  CheckitemEditRejectedAction,
  CheckitemEditFulfilledAction,
  CheckitemMovePendingAction,
  CheckitemMoveRejectedAction,
  CheckitemMoveFulfilledAction,
  CheckitemCreatePendingAction,
  CheckitemCreateRejectedAction,
  CheckitemCreateFulfilledAction,
  CheckitemDestroyPendingAction,
  CheckitemDestroyRejectedAction,
  CheckitemDestroyFulfilledAction,
  move,
  edit,
  create,
  destroy,
});