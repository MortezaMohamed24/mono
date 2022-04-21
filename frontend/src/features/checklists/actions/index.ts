import URLS from "../endpoints";
import {Oid} from "/util/idUtil";
import {OID} from "/util/formatter";
import FIELDS from "/checklists/fields";
import {OBJECT} from "/util/formatter";
import ApiMutator from "/core/api/mutator";
import {ChecklistBase} from "../entity";


// ---------- PREPARED REQUEST METAS

export type ChecklistEditRequestMeta = {
  /** The new title for checklist. */
  readonly title?: ChecklistBase["title"] | undefined;
  /** The new visibility filter for checklist. */
  readonly filter?: ChecklistBase["filter"] | undefined;
  /** The id of the checklist to edit.*/
  readonly idChecklist: string; 
}

export type ChecklistCreateRequestMeta = ChecklistCreateRequestMetaUnprepared & {
  /** The id for the checklist to create. */
  readonly id: string; 
}

export type ChecklistDestroyRequestMeta = {
  /** The id of the checklist to destroy. */
  readonly idChecklist: string;
}


// ---------- UNPREPARED REQUEST METAS

export type ChecklistCreateRequestMetaUnprepared = {
  /** The title of the checklist to create. */
  readonly title: ChecklistBase["title"];
  /** The id of the card for which to create a checklist. */
  readonly idCard: string; 
}


// ---------- REQUEST META PREPAREERS

export const prepareChecklistCreateRequestMeta = (meta: ChecklistCreateRequestMetaUnprepared): ChecklistCreateRequestMeta => ({
  ...meta,
  id: new Oid().toHexString(),
});


// ---------- REQUEST META FORMATTERS

export const formatAsChecklistEditRequestMeta = OBJECT({
  title: FIELDS.title.copy({optional: true}),
  filter: FIELDS.filter.copy({optional: true}),
  idChecklist: OID(), 
}, {
  name: "ChecklistEditRequestMeta",
});

export const formatAsChecklistCreateRequestMeta = OBJECT({
  title: FIELDS.title,
  idCard: OID(), 
}, {
  name: "ChecklistCreateRequestMeta",
});

export const formatAsChecklistDestroyRequestMeta = OBJECT({
  idChecklist: OID(),
}, {
  name: "ChecklistDestroyRequestMeta",
});


// ---------- RESPONSE BODIES

export type ChecklistEditResponseBody = undefined;
export type ChecklistCreateResponseBody = undefined;
export type ChecklistDestroyResponseBody = undefined;


// ---------- REQUEST CREATORS

export const ChecklistEditRequest = (body: ChecklistEditRequestMeta) => (
  new Request(URLS.EDIT, {
    body: JSON.stringify(body),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const ChecklistCreateRequest = (body: ChecklistCreateRequestMeta) => (
  new Request(URLS.CREATE, {
    body: JSON.stringify(body),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const ChecklistDestroyRequest = (body: ChecklistDestroyRequestMeta) => (
  new Request(URLS.DESTROY, {
    body: JSON.stringify(body),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);


// ---------- ACTION TYPES

export const EDIT_PENDING = "checklist/edit/pending";
export const EDIT_REJECTED = "checklist/edit/rejected";
export const EDIT_FULFILLED = "checklist/edit/fulfilled";
export const CREATE_PENDING = "checklist/create/pending";
export const CREATE_REJECTED = "checklist/create/rejected";
export const CREATE_FULFILLED = "checklist/create/fulfilled";
export const DESTROY_PENDING = "checklist/destroy/pending";
export const DESTROY_REJECTED = "checklist/destroy/rejected";
export const DESTROY_FULFILLED = "checklist/destroy/fulfilled";


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

export type ChecklistEditPendingAction = {
  type: EDIT_PENDING;
  meta: ChecklistEditRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ChecklistEditRejectedAction = {
  type: EDIT_REJECTED;
  meta: ChecklistEditRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ChecklistEditFulfilledAction = {
  type: EDIT_FULFILLED;
  meta: ChecklistEditRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ChecklistCreatePendingAction = {
  type: CREATE_PENDING;
  meta: ChecklistCreateRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ChecklistCreateRejectedAction = {
  type: CREATE_REJECTED;
  meta: ChecklistCreateRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ChecklistCreateFulfilledAction = {
  type: CREATE_FULFILLED;
  meta: ChecklistCreateRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ChecklistDestroyPendingAction = {
  type: DESTROY_PENDING;
  meta: ChecklistDestroyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ChecklistDestroyRejectedAction = {
  type: DESTROY_REJECTED;
  meta: ChecklistDestroyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ChecklistDestroyFulfilledAction = {
  type: DESTROY_FULFILLED;
  meta: ChecklistDestroyRequestMeta;
  error: undefined;
  payload: undefined;
}


// ---------- GROUPED ACTIONS

export type AnyAction = 
  | ChecklistEditPendingAction
  | ChecklistEditRejectedAction
  | ChecklistEditFulfilledAction
  | ChecklistCreatePendingAction
  | ChecklistCreateRejectedAction
  | ChecklistCreateFulfilledAction
  | ChecklistDestroyPendingAction
  | ChecklistDestroyRejectedAction
  | ChecklistDestroyFulfilledAction

export type AllActions = {
  [EDIT_PENDING]: ChecklistEditPendingAction;
  [EDIT_REJECTED]: ChecklistEditRejectedAction;
  [EDIT_FULFILLED]: ChecklistEditFulfilledAction;
  [CREATE_PENDING]: ChecklistCreatePendingAction;
  [CREATE_REJECTED]: ChecklistCreateRejectedAction;
  [CREATE_FULFILLED]: ChecklistCreateFulfilledAction;
  [DESTROY_PENDING]: ChecklistDestroyPendingAction;
  [DESTROY_REJECTED]: ChecklistDestroyRejectedAction;
  [DESTROY_FULFILLED]: ChecklistDestroyFulfilledAction;  
}


// ---------- ACTION CREATORS

export const ChecklistEditPendingAction = (meta: ChecklistEditRequestMeta): ChecklistEditPendingAction => ({
  type: EDIT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ChecklistEditRejectedAction = (meta: ChecklistEditRequestMeta, error: unknown): ChecklistEditRejectedAction => ({
  type: EDIT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ChecklistEditFulfilledAction = (meta: ChecklistEditRequestMeta, payload?: ChecklistEditResponseBody): ChecklistEditFulfilledAction => ({
  type: EDIT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ChecklistCreatePendingAction = (meta: ChecklistCreateRequestMeta): ChecklistCreatePendingAction => ({
  type: CREATE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ChecklistCreateRejectedAction = (meta: ChecklistCreateRequestMeta, error: unknown): ChecklistCreateRejectedAction => ({
  type: CREATE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ChecklistCreateFulfilledAction = (meta: ChecklistCreateRequestMeta, payload?: ChecklistCreateResponseBody): ChecklistCreateFulfilledAction => ({
  type: CREATE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ChecklistDestroyPendingAction = (meta: ChecklistDestroyRequestMeta): ChecklistDestroyPendingAction => ({
  type: DESTROY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ChecklistDestroyRejectedAction = (meta: ChecklistDestroyRequestMeta, error: unknown): ChecklistDestroyRejectedAction => ({
  type: DESTROY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ChecklistDestroyFulfilledAction = (meta: ChecklistDestroyRequestMeta, payload?: ChecklistDestroyResponseBody): ChecklistDestroyFulfilledAction => ({
  type: DESTROY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});


// ---------- THUNKS

export const edit = ApiMutator<
  ChecklistEditRequestMeta,
  ChecklistEditResponseBody,
  ChecklistEditPendingAction,
  ChecklistEditRejectedAction,
  ChecklistEditFulfilledAction
>({
  request: ChecklistEditRequest,
  pending: ChecklistEditPendingAction,
  rejected: ChecklistEditRejectedAction,
  fulfilled: ChecklistEditFulfilledAction,
});


export const create = ApiMutator<
  ChecklistCreateRequestMeta,
  ChecklistCreateResponseBody,
  ChecklistCreatePendingAction,
  ChecklistCreateRejectedAction,
  ChecklistCreateFulfilledAction,
  ChecklistCreateRequestMetaUnprepared
>({
  request: ChecklistCreateRequest,
  prepare: prepareChecklistCreateRequestMeta,
  pending: ChecklistCreatePendingAction,
  rejected: ChecklistCreateRejectedAction,
  fulfilled: ChecklistCreateFulfilledAction,
});

export const destroy = ApiMutator<
  ChecklistDestroyRequestMeta,
  ChecklistDestroyResponseBody,
  ChecklistDestroyPendingAction,
  ChecklistDestroyRejectedAction,
  ChecklistDestroyFulfilledAction
>({
  request: ChecklistDestroyRequest,
  pending: ChecklistDestroyPendingAction,
  rejected: ChecklistDestroyRejectedAction,
  fulfilled: ChecklistDestroyFulfilledAction,
});



export default Object.freeze({
  prepareChecklistCreateRequestMeta,
  formatAsChecklistEditRequestMeta,
  formatAsChecklistCreateRequestMeta,
  formatAsChecklistDestroyRequestMeta,
  ChecklistEditRequest,
  ChecklistCreateRequest,
  ChecklistDestroyRequest,
  EDIT_PENDING,
  EDIT_REJECTED,
  EDIT_FULFILLED,
  CREATE_PENDING,
  CREATE_REJECTED,
  CREATE_FULFILLED,
  DESTROY_PENDING,
  DESTROY_REJECTED,
  DESTROY_FULFILLED,
  ChecklistEditPendingAction,
  ChecklistEditRejectedAction,
  ChecklistEditFulfilledAction,
  ChecklistCreatePendingAction,
  ChecklistCreateRejectedAction,
  ChecklistCreateFulfilledAction,
  ChecklistDestroyPendingAction,
  ChecklistDestroyRejectedAction,
  ChecklistDestroyFulfilledAction,
  edit,
  create,
  destroy,
});