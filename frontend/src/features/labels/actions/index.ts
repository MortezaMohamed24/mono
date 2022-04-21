import URLS from "/labels/endpoints";
import {Oid} from "/util/idUtil";
import {OID} from "/util/formatter";
import FIELDS from "/labels/fields";
import {OBJECT} from "/util/formatter";
import {UNDEFINED} from "/util/formatter";
import ApiMutator from "/core/api/mutator";
import {LabelBase} from "/labels/entity";


// ---------- PREPARED REQUEST METAS

export type LabelEditRequestMeta = {
  /** The new name for label. */
  readonly name?: LabelBase["name"]; 
  /** The new color for label. */
  readonly color?: LabelBase["color"];
  /** The id of the label to edit. */
  readonly idLabel: string; 
}

export type LabelCreateRequestMeta = LabelCreateRequestMetaUnprepared & {
  /** The id for the label to create */
  readonly id: string;
}

export type LabelDestroyRequestMeta = {
  /** The id of the label to destroy. */
  readonly idLabel: string;
}


// ---------- UNREQUEST PREPARED METAS

export type LabelCreateRequestMetaUnprepared = {
  /** The name of the label to create. */
  readonly name: LabelBase["name"]; 
  /** The color of the label to create. */
  readonly color: LabelBase["color"];
  /** The id of the board for which to create a label. */
  readonly idBoard: string; 
}


// ---------- REQUEST META PREPARERS

export const prepareLabelCreateRequestMeta = (meta: LabelCreateRequestMetaUnprepared): LabelCreateRequestMeta => ({
  ...meta,
  id: new Oid().toHexString(),
});


// ---------- REQUEST META FORMATTERS

export const formatAsLabelEditRequestMeta = OBJECT({
  name: FIELDS.name.copy({optional: true}), 
  color: FIELDS.color.copy({optional: true}),
  idLabel: OID(), 
}, {
  name: "LabelEditRequestMeta",
});

export const formatAsLabelCreateRequestMeta = OBJECT({
  id: OID(),
  name: FIELDS.name, 
  color: FIELDS.color,
  idBoard: OID(), 
}, {
  name: "LabelCreateRequestMeta",
});

export const formatAsLabelDestroyRequestMeta = OBJECT({
  idLabel: OID(),
}, {
  name: "LabelDestroyRequestMeta",
});


// ---------- REQUEST CREATORS

export const LabelEditRequest = (meta: LabelEditRequestMeta): Request => (
  new Request(URLS.EDIT, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);
  
export const LabelCreateRequest = (meta: LabelCreateRequestMeta): Request => (
  new Request(URLS.CREATE, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const LabelDestroyRequest = (meta: LabelDestroyRequestMeta): Request => (
  new Request(URLS.DESTROY, {
    body: JSON.stringify(meta),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);


// --------- RESPONSE BODIES

export type LabelEditResponseBody = undefined;
export type LabelCreateResponseBody = undefined;
export type LabelDestroyResponseBody = undefined;


// ---------- ACTIONT YPES

export const EDIT_PENDING = "labels/edit/pending";
export const EDIT_REJECTED = "labels/edit/rejected";
export const EDIT_FULFILLED = "labels/edit/fulfilled";
export const CREATE_PENDING = "labels/create/pending";
export const CREATE_REJECTED = "labels/create/rejected";
export const CREATE_FULFILLED = "labels/create/fulfilled";
export const DESTROY_PENDING = "labels/destroy/pending";
export const DESTROY_REJECTED = "labels/destroy/rejected";
export const DESTROY_FULFILLED = "labels/destroy/fulfilled";


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

export type LabelEditPendingAction = {
  type: EDIT_PENDING;
  meta: LabelEditRequestMeta;
  error: undefined;
  payload: undefined;
}

export type LabelEditRejectedAction = {
  type: EDIT_REJECTED;
  meta: LabelEditRequestMeta;
  error: unknown;
  payload: undefined;
}

export type LabelEditFulfilledAction = {
  type: EDIT_FULFILLED;
  meta: LabelEditRequestMeta;
  error: undefined;
  payload: LabelEditResponseBody;
}

export type LabelCreatePendingAction = {
  type: CREATE_PENDING;
  meta: LabelCreateRequestMeta;
  error: undefined;
  payload: undefined;
}

export type LabelCreateRejectedAction = {
  type: CREATE_REJECTED;
  meta: LabelCreateRequestMeta;
  error: unknown;
  payload: undefined;
}

export type LabelCreateFulfilledAction = {
  type: CREATE_FULFILLED;
  meta: LabelCreateRequestMeta;
  error: undefined;
  payload: LabelCreateResponseBody;
}

export type LabelDestroyPendingAction = {
  type: DESTROY_PENDING;
  meta: LabelDestroyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type LabelDestroyRejectedAction = {
  type: DESTROY_REJECTED;
  meta: LabelDestroyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type LabelDestroyFulfilledAction = {
  type: DESTROY_FULFILLED;
  meta: LabelDestroyRequestMeta;
  error: undefined;
  payload: LabelDestroyResponseBody;
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | LabelEditPendingAction
  | LabelEditRejectedAction
  | LabelEditFulfilledAction
  | LabelCreatePendingAction
  | LabelCreateRejectedAction
  | LabelCreateFulfilledAction
  | LabelDestroyPendingAction
  | LabelDestroyRejectedAction
  | LabelDestroyFulfilledAction

export type AllActions = {
  [EDIT_PENDING]: LabelEditPendingAction;
  [EDIT_REJECTED]: LabelEditRejectedAction;
  [EDIT_FULFILLED]: LabelEditFulfilledAction;
  [CREATE_PENDING]: LabelCreatePendingAction;
  [CREATE_REJECTED]: LabelCreateRejectedAction;
  [CREATE_FULFILLED]: LabelCreateFulfilledAction;
  [DESTROY_PENDING]: LabelDestroyPendingAction;
  [DESTROY_REJECTED]: LabelDestroyRejectedAction;
  [DESTROY_FULFILLED]: LabelDestroyFulfilledAction;  
}


// ---------- ACTION CREATORS

export const LabelEditPendingAction = (meta: LabelEditRequestMeta): LabelEditPendingAction => ({
  type: EDIT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const LabelEditRejectedAction = (meta: LabelEditRequestMeta, error: unknown): LabelEditRejectedAction => ({
  type: EDIT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const LabelEditFulfilledAction = (meta: LabelEditRequestMeta, payload: LabelEditResponseBody): LabelEditFulfilledAction => ({
  type: EDIT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const LabelCreatePendingAction = (meta: LabelCreateRequestMeta): LabelCreatePendingAction => ({
  type: CREATE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const LabelCreateRejectedAction = (meta: LabelCreateRequestMeta, error: unknown): LabelCreateRejectedAction => ({
  type: CREATE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const LabelCreateFulfilledAction = (meta: LabelCreateRequestMeta, payload: LabelCreateResponseBody): LabelCreateFulfilledAction => ({
  type: CREATE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const LabelDestroyPendingAction = (meta: LabelDestroyRequestMeta): LabelDestroyPendingAction => ({
  type: DESTROY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const LabelDestroyRejectedAction = (meta: LabelDestroyRequestMeta, error: unknown): LabelDestroyRejectedAction => ({
  type: DESTROY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const LabelDestroyFulfilledAction = (meta: LabelDestroyRequestMeta, payload: LabelDestroyResponseBody): LabelDestroyFulfilledAction => ({
  type: DESTROY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});


// ---------- THUNKS

export const edit = ApiMutator<
  LabelEditRequestMeta,
  LabelEditResponseBody,
  LabelEditPendingAction,
  LabelEditRejectedAction,
  LabelEditFulfilledAction
>({
  request: LabelEditRequest,
  pending: LabelEditPendingAction,  
  rejected: LabelEditRejectedAction,  
  fulfilled: LabelEditFulfilledAction,  
});

export const create = ApiMutator<
  LabelCreateRequestMeta,
  LabelCreateResponseBody,
  LabelCreatePendingAction,
  LabelCreateRejectedAction,
  LabelCreateFulfilledAction,
  LabelCreateRequestMetaUnprepared
>({
  request: LabelCreateRequest,
  prepare: prepareLabelCreateRequestMeta,
  pending: LabelCreatePendingAction,  
  rejected: LabelCreateRejectedAction,  
  fulfilled: LabelCreateFulfilledAction,  
});

export const destroy = ApiMutator<
  LabelDestroyRequestMeta,
  LabelDestroyResponseBody,
  LabelDestroyPendingAction,
  LabelDestroyRejectedAction,
  LabelDestroyFulfilledAction
>({
  request: LabelDestroyRequest,
  pending: LabelDestroyPendingAction,  
  rejected: LabelDestroyRejectedAction,  
  fulfilled: LabelDestroyFulfilledAction,  
});


export default Object.freeze({
  prepareLabelCreateRequestMeta,
  formatAsLabelEditRequestMeta,
  formatAsLabelCreateRequestMeta,
  formatAsLabelDestroyRequestMeta,
  LabelEditRequest,
  LabelCreateRequest,
  LabelDestroyRequest,
  EDIT_PENDING,
  EDIT_REJECTED,
  EDIT_FULFILLED,
  CREATE_PENDING,
  CREATE_REJECTED,
  CREATE_FULFILLED,
  DESTROY_PENDING,
  DESTROY_REJECTED,
  DESTROY_FULFILLED,
  LabelEditPendingAction,
  LabelEditRejectedAction,
  LabelEditFulfilledAction,
  LabelCreatePendingAction,
  LabelCreateRejectedAction,
  LabelCreateFulfilledAction,
  LabelDestroyPendingAction,
  LabelDestroyRejectedAction,
  LabelDestroyFulfilledAction,
  edit,
  create,
  destroy,
});