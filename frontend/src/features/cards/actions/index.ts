import URLS from "../endpoints";
import {OID} from "/util/formatter";
import {Oid} from "/util/idUtil";
import FIELDS from "/features/cards/fields";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {BOOLEAN} from "/util/formatter";
import ApiMutater from "/api/mutator";
import {CardRawUnnested} from "../entity/rawUnnested";
import {LabelRawUnnested} from "/features/labels/entity";
import {formatAsCardRawUnnested} from "/features/cards/entity";
import {formatAsLabelRawUnnested} from "/features/labels/entity";


// ---------- PREPARED REQUEST METAS

export type CardEditRequestMeta = {
  /** The id of the card to edit.*/
  readonly idCard: string;
  /** The new title for card. */
  readonly title?: string;
  /** The new due date for card; in milliseconds. */
  readonly dateDue?: number | null;
  /** The new start date for card; in milliseconds. */
  readonly dateStart?: number | null;
  /** whether card should send notifications */
  readonly isWatched?: boolean;
  /** Whether this card is complete (as a task) */
  readonly isComplete?: boolean;
  /** The new description for card. */
  readonly description?: string | null;
}

export type CardMoveRequestMeta = {
  /** The id of the card to move. */
  readonly idCard: string; 
  /** The id of the list to move card to. */
  readonly idList: string;
  /** The index where card should be in target list. */
  readonly index: number;
}

export type CardCopyRequestMeta = {
  /** The id of the card to copy. */
  readonly idCard: string;
  /** The title for the copy card. */
  readonly title: string;
  /** The id of the list where to put the copy. */
  readonly idList: string;
  /** The index, in the list represented by `idList`, at which to put the copy. */
  readonly index: number;
  /** Specifies whether to also copy card's dates into the copy. */
  readonly keepDates?: boolean;
  /** Specifies whether to also copy card's labels into the copy. */
  readonly keepLabels?: boolean;
  /** Specifies whether to also copy card's checklists into the copy. */
  readonly keepChecklists?: boolean;
}

export type CardLabelRequestMeta = {
  /** The id of the card to add a label to. */
  readonly idCard: string;
  /** The id of the label to add to card; which must belong to the card's parent board. */
  readonly idLabel: string;
}

export type CardCreateRequestMeta = CardCreateRequestMetaUnprepared & {
  /** The id for the card to create */
  readonly id: string;
  /** The millisecond timestamp when the request was performed */
  readonly dateCreation: number;
}

export type CardUnlabelRequestMeta = {
  /** The id of the card to remove a label from. */
  readonly idCard: string;
  /** The id of the label to remove from card. */
  readonly idLabel: string;
}

export type CardDestroyRequestMeta = {
  /** The id of the card to destroy */
  readonly idCard: string;
}

export type CardSetLabelsRequestMeta = {
  /** The of of the card whose labels are to set. */
  readonly idCard: string;
  /** The ids of the labels that should be set to card. */
  readonly idLabels: string[];
}


// ---------- UNPREPARED REQUEST METAS 

export type CardCreateRequestMetaUnprepared = {
  /** The id of the list for which to create a card. */
  readonly idList: string;
  /** The title of the card to create. */
  readonly title: string;
  /** The index, in the owner list, for the card to create. */
  readonly index: number;
  /** The ids of the labels that should be added to the card to create. */
  readonly idLabels: string[];
  /** The description of the card to create. */
  readonly description: string | null;
}


// ---------- REQUEST META CREATORS

export const prepareCardCreateRequestMeta = (meta: CardCreateRequestMetaUnprepared): CardCreateRequestMeta => ({
  ...meta, 
  id: new Oid().toHexString(),
  dateCreation: Date.now(),
});


// ---------- REQUEST META FORMATTERS

export const formatAsCardEditRequestMeta = OBJECT({
  idCard: OID(),
  title: FIELDS.title.copy({optional: true}),
  dateDue: FIELDS.dateDue.copy({optional: true}),
  dateStart: FIELDS.dateStart.copy({optional: true}),
  isWatched: FIELDS.isWatched.copy({optional: true}),
  isComplete: FIELDS.isComplete.copy({optional: true}),
  description: FIELDS.description.copy({optional: true}),
}, {
  name: "CardEditRequestMeta",
});

export const formatAsCardMoveRequestMeta = OBJECT({
  index: NUMBER({min: 0}),
  idCard: OID(), 
  idList: OID(),
}, {
  name: "CardMoveRequestMeta",
});

export const formatAsCardCopyRequestMeta = OBJECT({
  title: FIELDS.title,
  index: NUMBER({min: 0}),
  idList: OID(),
  keepDates: BOOLEAN({optional: true}),
  keepLabels: BOOLEAN({optional: true}),
  keepChecklista: BOOLEAN({optional: true}),
});

export const formatAsCardLabelRequestMeta = OBJECT({
  idCard: OID(),
  idLabel: OID(),
}, {
  name: "CardLabelRequestMeta",
});

export const formatAsCardCreateRequestMeta = OBJECT({
  title: FIELDS.title,
  index: NUMBER({min: 0}),
  idList: OID(),
  idLabels: ARRAY([OID()]),
  description: FIELDS.description,
}, {
  name: "CardCreateRequestMeta",
});

export const formatAsCardUnlabelRequestMeta = OBJECT({
  idCard: OID(),
  idLabel: OID(),
}, {
  name: "CardUnlabelRequestMeta",
});

export const formatAsCardDestroyRequestMeta = OBJECT({
  idCard: OID(),
}, {
  name: "CardDestroyRequestMeta",
});

export const formatAsCardSetLabelsRequestMeta = OBJECT({
  idCard: OID(),
  idLabels: ARRAY([OID()]),
}, {
  name: "CardSetLabelsRequestMeta",
});


// ---------- RESPONSE BODIES

export type CardEditResponseBody = undefined
export type CardMoveResponseBody = {card: CardRawUnnested, labels: LabelRawUnnested[]}
export type CardCopyResponseBody = {card: CardRawUnnested, labels: LabelRawUnnested[]}
export type CardLabelResponseBody = undefined
export type CardCreateResponseBody = undefined
export type CardUnlabelResponseBody = undefined
export type CardDestroyResponseBody = undefined
export type CardSetLabelsResponseBody = undefined


// ---------- RESPONSE BODY FORMATTERS

export const formatAsCardMoveResponseBody = OBJECT({
  card: formatAsCardRawUnnested, 
  labels: ARRAY([formatAsLabelRawUnnested]),
}, {
  name: "CardMoveResponseBody",
});

export const formatAsCardCopyResponseBody = OBJECT({
  card: formatAsCardRawUnnested, 
  labels: ARRAY([formatAsLabelRawUnnested]),
}, {
  name: "CardCopyRequestMeta",
});


// ---------- REQUEST CREATORS

export const CardMoveRequest = (meta: CardMoveRequestMeta) => (
  new Request(URLS.MOVE, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const CardCopyRequest = (meta: CardCopyRequestMeta) => (
  new Request(URLS.COPY, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const CardEditRequest = (meta: CardEditRequestMeta) => (
  new Request(URLS.EDIT, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const CardLabelRequest = (meta: CardLabelRequestMeta) => (
  new Request(URLS.LABEL, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const CardCreateRequest = (meta: CardCreateRequestMeta) => (
  new Request(URLS.CREATE, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const CardDestroyRequest = (meta: CardDestroyRequestMeta) => (
  new Request(URLS.DESTROY, {
    body: JSON.stringify(meta),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);

export const CardUnlabelRequest = (meta: CardUnlabelRequestMeta) => (
  new Request(URLS.UNLABE, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const CardSetLabelsRequest = (meta: CardSetLabelsRequestMeta) => (
  new Request(URLS.SET_LABELS, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

// ---------- ACTION TYPES

export const MOVE_PENDING = "card/move/pending";
export const MOVE_REJECTED = "card/move/rejected";
export const MOVE_FULFILLED = "card/move/fulfilled";
export const EDIT_PENDING = "card/edit/pending";
export const EDIT_REJECTED = "card/edit/rejected";
export const EDIT_FULFILLED = "card/edit/fulfilled";
export const COPY_PENDING = "card/copy/pending";
export const COPY_REJECTED = "card/copy/rejected";
export const COPY_FULFILLED = "card/copy/fulfilled";
export const LABEL_PENDING = "card/label/pending";
export const LABEL_REJECTED = "card/label/rejected";
export const LABEL_FULFILLED = "card/label/fulfilled";
export const CREATE_PENDING = "card/create/pending";
export const CREATE_REJECTED = "card/create/rejected";
export const CREATE_FULFILLED = "card/create/fulfilled";
export const DESTROY_PENDING = "card/destroy/pending";
export const DESTROY_REJECTED = "card/destroy/rejected";
export const DESTROY_FULFILLED = "card/destroy/fulfilled";
export const UNLABEL_PENDING = "card/unlabel/pending";
export const UNLABEL_REJECTED = "card/unlabel/rejected";
export const UNLABEL_FULFILLED = "card/unlabel/fulfilled";
export const SET_LABELS_PENDING = "card/setLabels/pending";
export const SET_LABELS_REJECTED = "card/setLabels/rejected";
export const SET_LABELS_FULFILLED = "card/setLabels/fulfilled";


export type MOVE_PENDING = typeof MOVE_PENDING;
export type MOVE_REJECTED = typeof MOVE_REJECTED;
export type MOVE_FULFILLED = typeof MOVE_FULFILLED;
export type EDIT_PENDING = typeof EDIT_PENDING;
export type EDIT_REJECTED = typeof EDIT_REJECTED;
export type EDIT_FULFILLED = typeof EDIT_FULFILLED;
export type COPY_PENDING = typeof COPY_PENDING;
export type COPY_REJECTED = typeof COPY_REJECTED;
export type COPY_FULFILLED = typeof COPY_FULFILLED;
export type LABEL_PENDING = typeof LABEL_PENDING;
export type LABEL_REJECTED = typeof LABEL_REJECTED;
export type LABEL_FULFILLED = typeof LABEL_FULFILLED;
export type CREATE_PENDING = typeof CREATE_PENDING;
export type CREATE_REJECTED = typeof CREATE_REJECTED;
export type CREATE_FULFILLED = typeof CREATE_FULFILLED;
export type DESTROY_PENDING = typeof DESTROY_PENDING;
export type DESTROY_REJECTED = typeof DESTROY_REJECTED;
export type DESTROY_FULFILLED = typeof DESTROY_FULFILLED;
export type UNLABEL_PENDING = typeof UNLABEL_PENDING;
export type UNLABEL_REJECTED = typeof UNLABEL_REJECTED;
export type UNLABEL_FULFILLED = typeof UNLABEL_FULFILLED;
export type SET_LABELS_PENDING = typeof SET_LABELS_PENDING;
export type SET_LABELS_REJECTED = typeof SET_LABELS_REJECTED;
export type SET_LABELS_FULFILLED = typeof SET_LABELS_FULFILLED;


// ---------- ACTIONS

export type CardEditPendingAction = {
  type: EDIT_PENDING;
  meta: CardEditRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardEditRejectedAction = {
  type: EDIT_REJECTED;
  meta: CardEditRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardEditFulfilledAction = {
  type: EDIT_FULFILLED;
  meta: CardEditRequestMeta;
  error: undefined;
  payload: CardEditResponseBody;
}

export type CardMovePendingAction = {
  type: MOVE_PENDING;
  meta: CardMoveRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardMoveRejectedAction = {
  type: MOVE_REJECTED;
  meta: CardMoveRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardMoveFulfilledAction = {
  type: MOVE_FULFILLED;
  meta: CardMoveRequestMeta;
  error: undefined;
  payload: CardMoveResponseBody;
}

export type CardCopyPendingAction = {
  type: COPY_PENDING;
  meta: CardCopyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardCopyRejectedAction = {
  type: COPY_REJECTED;
  meta: CardCopyRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardCopyFulfilledAction = {
  type: COPY_FULFILLED;
  meta: CardCopyRequestMeta;
  error: undefined;
  payload: CardCopyResponseBody;
}

export type CardLabelPendingAction = {
  type: LABEL_PENDING;
  meta: CardLabelRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardLabelRejectedAction = {
  type: LABEL_REJECTED;
  meta: CardLabelRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardLabelFulfilledAction = {
  type: LABEL_FULFILLED;
  meta: CardLabelRequestMeta;
  error: undefined;
  payload: CardLabelResponseBody;
}

export type CardCreatePendingAction = {
  type: CREATE_PENDING;
  meta: CardCreateRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardCreateRejectedAction = {
  type: CREATE_REJECTED;
  meta: CardCreateRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardCreateFulfilledAction = {
  type: CREATE_FULFILLED;
  meta: CardCreateRequestMeta;
  error: undefined;
  payload: CardCreateResponseBody;
}

export type CardDestroyPendingAction = {
  type: DESTROY_PENDING;
  meta: CardDestroyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardDestroyRejectedAction = {
  type: DESTROY_REJECTED;
  meta: CardDestroyRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardDestroyFulfilledAction = {
  type: DESTROY_FULFILLED;
  meta: CardDestroyRequestMeta;
  error: undefined;
  payload: CardDestroyResponseBody;
}

export type CardUnlabelPendingAction = {
  type: UNLABEL_PENDING;
  meta: CardUnlabelRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardUnlabelRejectedAction = {
  type: UNLABEL_REJECTED;
  meta: CardUnlabelRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardUnlabelFulfilledAction = {
  type: UNLABEL_FULFILLED;
  meta: CardUnlabelRequestMeta;
  error: undefined;
  payload: CardUnlabelResponseBody;
}

export type CardSetLabelsPendingAction = {
  type: SET_LABELS_PENDING;
  meta: CardSetLabelsRequestMeta;
  error: undefined;
  payload: undefined;
}

export type CardSetLabelsRejectedAction = {
  type: SET_LABELS_REJECTED;
  meta: CardSetLabelsRequestMeta;
  error: unknown;
  payload: undefined;  
}

export type CardSetLabelsFulfilledAction = {
  type: SET_LABELS_FULFILLED;
  meta: CardSetLabelsRequestMeta;
  error: undefined;
  payload: CardSetLabelsResponseBody;
}


// ---------- GROUPED ACTIONS

export type AnyAction =
  | CardEditPendingAction
  | CardEditRejectedAction
  | CardEditFulfilledAction
  | CardMovePendingAction
  | CardMoveRejectedAction
  | CardMoveFulfilledAction
  | CardCopyPendingAction
  | CardCopyRejectedAction
  | CardCopyFulfilledAction
  | CardLabelPendingAction
  | CardLabelRejectedAction
  | CardLabelFulfilledAction
  | CardCreatePendingAction
  | CardCreateRejectedAction
  | CardCreateFulfilledAction
  | CardDestroyPendingAction
  | CardDestroyRejectedAction
  | CardDestroyFulfilledAction
  | CardUnlabelPendingAction
  | CardUnlabelRejectedAction
  | CardUnlabelFulfilledAction
  | CardSetLabelsPendingAction
  | CardSetLabelsRejectedAction
  | CardSetLabelsFulfilledAction

  export type AllActions = {
  [EDIT_PENDING]: CardEditPendingAction;
  [EDIT_REJECTED]: CardEditRejectedAction;
  [EDIT_FULFILLED]: CardEditFulfilledAction;
  [MOVE_PENDING]: CardMovePendingAction;
  [MOVE_REJECTED]: CardMoveRejectedAction;
  [MOVE_FULFILLED]: CardMoveFulfilledAction;
  [COPY_PENDING]: CardCopyPendingAction;
  [COPY_REJECTED]: CardCopyRejectedAction;
  [COPY_FULFILLED]: CardCopyFulfilledAction;
  [LABEL_PENDING]: CardLabelPendingAction;
  [LABEL_REJECTED]: CardLabelRejectedAction;
  [LABEL_FULFILLED]: CardLabelFulfilledAction;
  [CREATE_PENDING]: CardCreatePendingAction;
  [CREATE_REJECTED]: CardCreateRejectedAction;
  [CREATE_FULFILLED]: CardCreateFulfilledAction;
  [DESTROY_PENDING]: CardDestroyPendingAction;
  [DESTROY_REJECTED]: CardDestroyRejectedAction;
  [DESTROY_FULFILLED]: CardDestroyFulfilledAction;
  [UNLABEL_PENDING]: CardUnlabelPendingAction;
  [UNLABEL_REJECTED]: CardUnlabelRejectedAction;
  [UNLABEL_FULFILLED]: CardUnlabelFulfilledAction;
  [SET_LABELS_PENDING]: CardSetLabelsPendingAction;
  [SET_LABELS_REJECTED]: CardSetLabelsRejectedAction;
  [SET_LABELS_FULFILLED]: CardSetLabelsFulfilledAction;
}


// ---------- ACTION CREATORS

export const CardEditPendingAction = (meta: CardEditRequestMeta): CardEditPendingAction => ({
  type: EDIT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardEditRejectedAction = (meta: CardEditRequestMeta, error: unknown): CardEditRejectedAction => ({
  type: EDIT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardEditFulfilledAction = (meta: CardEditRequestMeta, payload: CardEditResponseBody): CardEditFulfilledAction => ({
  type: EDIT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CardMovePendingAction = (meta: CardMoveRequestMeta): CardMovePendingAction => ({
  type: MOVE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardMoveRejectedAction = (meta: CardMoveRequestMeta, error: unknown): CardMoveRejectedAction => ({
  type: MOVE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardMoveFulfilledAction = (meta: CardMoveRequestMeta, payload: CardMoveResponseBody): CardMoveFulfilledAction => ({
  type: MOVE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CardCopyPendingAction = (meta: CardCopyRequestMeta): CardCopyPendingAction => ({
  type: COPY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardCopyRejectedAction = (meta: CardCopyRequestMeta, error: unknown): CardCopyRejectedAction => ({
  type: COPY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardCopyFulfilledAction = (meta: CardCopyRequestMeta, payload: CardCopyResponseBody): CardCopyFulfilledAction => ({
  type: COPY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CardLabelPendingAction = (meta: CardLabelRequestMeta): CardLabelPendingAction => ({
  type: LABEL_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardLabelRejectedAction = (meta: CardLabelRequestMeta, error: unknown): CardLabelRejectedAction => ({
  type: LABEL_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardLabelFulfilledAction = (meta: CardLabelRequestMeta, payload: CardLabelResponseBody): CardLabelFulfilledAction => ({
  type: LABEL_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CardCreatePendingAction = (meta: CardCreateRequestMeta): CardCreatePendingAction => ({
  type: CREATE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardCreateRejectedAction = (meta: CardCreateRequestMeta, error: unknown): CardCreateRejectedAction => ({
  type: CREATE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardCreateFulfilledAction = (meta: CardCreateRequestMeta, payload: CardCreateResponseBody): CardCreateFulfilledAction => ({
  type: CREATE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CardDestroyPendingAction = (meta: CardDestroyRequestMeta): CardDestroyPendingAction => ({
  type: DESTROY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardDestroyRejectedAction = (meta: CardDestroyRequestMeta, error: unknown): CardDestroyRejectedAction => ({
  type: DESTROY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardDestroyFulfilledAction = (meta: CardDestroyRequestMeta, payload: CardDestroyResponseBody): CardDestroyFulfilledAction => ({
  type: DESTROY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CardUnlabelPendingAction = (meta: CardUnlabelRequestMeta): CardUnlabelPendingAction => ({
  type: UNLABEL_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardUnlabelRejectedAction = (meta: CardUnlabelRequestMeta, error: unknown): CardUnlabelRejectedAction => ({
  type: UNLABEL_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardUnlabelFulfilledAction = (meta: CardUnlabelRequestMeta, payload: CardUnlabelResponseBody): CardUnlabelFulfilledAction => ({
  type: UNLABEL_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const CardSetLabelsPendingAction = (meta: CardSetLabelsRequestMeta): CardSetLabelsPendingAction => ({
  type: SET_LABELS_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const CardSetLabelsRejectedAction = (meta: CardSetLabelsRequestMeta, error: unknown): CardSetLabelsRejectedAction => ({
  type: SET_LABELS_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,  
});

export const CardSetLabelsFulfilledAction = (meta: CardSetLabelsRequestMeta, payload: CardSetLabelsResponseBody): CardSetLabelsFulfilledAction => ({
  type: SET_LABELS_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});


// ---------- THUNKS

export const move = ApiMutater<
  CardMoveRequestMeta,
  CardMoveResponseBody,
  CardMovePendingAction,
  CardMoveRejectedAction,
  CardMoveFulfilledAction
>({
  format: formatAsCardMoveResponseBody.copy({strict: true}),
  request: CardMoveRequest,
  pending: CardMovePendingAction,
  rejected: CardMoveRejectedAction,
  fulfilled: CardMoveFulfilledAction,
});

export const copy = ApiMutater<
  CardCopyRequestMeta,
  CardCopyResponseBody,
  CardCopyPendingAction,
  CardCopyRejectedAction,
  CardCopyFulfilledAction
>({
  format: formatAsCardCopyResponseBody.copy({strict: true}),
  request: CardCopyRequest,
  pending: CardCopyPendingAction,
  rejected: CardCopyRejectedAction,
  fulfilled: CardCopyFulfilledAction,
});

export const edit = ApiMutater<
  CardEditRequestMeta,
  CardEditResponseBody,
  CardEditPendingAction,
  CardEditRejectedAction,
  CardEditFulfilledAction
>({
  request: CardEditRequest,
  pending: CardEditPendingAction,
  rejected: CardEditRejectedAction,
  fulfilled: CardEditFulfilledAction,
});

export const label = ApiMutater<
  CardLabelRequestMeta,
  CardLabelResponseBody,
  CardLabelPendingAction,
  CardLabelRejectedAction,
  CardLabelFulfilledAction
>({
  request: CardLabelRequest,
  pending: CardLabelPendingAction,
  rejected: CardLabelRejectedAction,
  fulfilled: CardLabelFulfilledAction,
});

export const create = ApiMutater<
  CardCreateRequestMeta,
  CardCreateResponseBody,
  CardCreatePendingAction,
  CardCreateRejectedAction,
  CardCreateFulfilledAction,
  CardCreateRequestMetaUnprepared
>({
  request: CardCreateRequest,
  prepare: prepareCardCreateRequestMeta,
  pending: CardCreatePendingAction,
  rejected: CardCreateRejectedAction,
  fulfilled: CardCreateFulfilledAction,
});

export const destroy = ApiMutater<
  CardDestroyRequestMeta,
  CardDestroyResponseBody,
  CardDestroyPendingAction,
  CardDestroyRejectedAction,
  CardDestroyFulfilledAction
>({
  request: CardDestroyRequest,
  pending: CardDestroyPendingAction,
  rejected: CardDestroyRejectedAction,
  fulfilled: CardDestroyFulfilledAction,
});

export const unlabel = ApiMutater<
  CardUnlabelRequestMeta,
  CardUnlabelResponseBody,
  CardUnlabelPendingAction,
  CardUnlabelRejectedAction,
  CardUnlabelFulfilledAction
>({
  request: CardUnlabelRequest,
  pending: CardUnlabelPendingAction,
  rejected: CardUnlabelRejectedAction,
  fulfilled: CardUnlabelFulfilledAction,
});

export const setLabels = ApiMutater<
  CardSetLabelsRequestMeta,
  CardSetLabelsResponseBody,
  CardSetLabelsPendingAction,
  CardSetLabelsRejectedAction,
  CardSetLabelsFulfilledAction
>({
  request: CardSetLabelsRequest,
  pending: CardSetLabelsPendingAction,
  rejected: CardSetLabelsRejectedAction,
  fulfilled: CardSetLabelsFulfilledAction,
});


export default Object.freeze({
  prepareCardCreateRequestMeta,
  formatAsCardEditRequestMeta,
  formatAsCardMoveRequestMeta,
  formatAsCardCopyRequestMeta,
  formatAsCardLabelRequestMeta,
  formatAsCardCreateRequestMeta,
  formatAsCardUnlabelRequestMeta,
  formatAsCardDestroyRequestMeta,
  formatAsCardSetLabelsRequestMeta,
  formatAsCardMoveResponseBody,
  formatAsCardCopyResponseBody,
  CardMoveRequest,
  CardCopyRequest,
  CardEditRequest,
  CardLabelRequest,
  CardCreateRequest,
  CardDestroyRequest,
  CardUnlabelRequest,
  CardSetLabelsRequest,
  MOVE_PENDING,
  MOVE_REJECTED,
  MOVE_FULFILLED,
  EDIT_PENDING,
  EDIT_REJECTED,
  EDIT_FULFILLED,
  COPY_PENDING,
  COPY_REJECTED,
  COPY_FULFILLED,
  LABEL_PENDING,
  LABEL_REJECTED,
  LABEL_FULFILLED,
  CREATE_PENDING,
  CREATE_REJECTED,
  CREATE_FULFILLED,
  DESTROY_PENDING,
  DESTROY_REJECTED,
  DESTROY_FULFILLED,
  UNLABEL_PENDING,
  UNLABEL_REJECTED,
  UNLABEL_FULFILLED,
  SET_LABELS_PENDING,
  SET_LABELS_REJECTED,
  SET_LABELS_FULFILLED,
  CardEditPendingAction,
  CardEditRejectedAction,
  CardEditFulfilledAction,
  CardMovePendingAction,
  CardMoveRejectedAction,
  CardMoveFulfilledAction,
  CardCopyPendingAction,
  CardCopyRejectedAction,
  CardCopyFulfilledAction,
  CardLabelPendingAction,
  CardLabelRejectedAction,
  CardLabelFulfilledAction,
  CardCreatePendingAction,
  CardCreateRejectedAction,
  CardCreateFulfilledAction,
  CardDestroyPendingAction,
  CardDestroyRejectedAction,
  CardDestroyFulfilledAction,
  CardUnlabelPendingAction,
  CardUnlabelRejectedAction,
  CardUnlabelFulfilledAction,
  CardSetLabelsPendingAction,
  CardSetLabelsRejectedAction,
  CardSetLabelsFulfilledAction,
  move,
  copy,
  edit,
  label,
  create,
  destroy,
  unlabel,
  setLabels,
});