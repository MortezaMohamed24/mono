import {Or} from "/util/checker";
import URLS from "../endpoints";
import list from "/lists/entity";
import card from "../../cards/entity";
import label from "/labels/entity";
import {Oid} from "/util/idUtil";
import FIELDS from "/lists/fields";
import {OID} from "/util/checker";
import {OBJECT} from "/util/checker";
import {NUMBER} from "/util/checker";
import {UNDEFINED} from "/util/checker";
import {ListBase} from "/lists/entity";
import ApiMutator from "/api/mutator";
import {WithError} from "/util/checker";
import {CardRawUnnested} from "/cards/entity";
import {ListRawUnnested} from "/lists/entity";
import {LabelRawUnnested} from "/labels/entity";


// ---------- PREPARED REQUEST METAS

export type ListEditRequestMeta = {
  /** The id of the list to edit. */
  readonly idList: string;
  /** The new title for list. */
  readonly title?: string;
  /** Whether this list can send notifications to relevant users. */
  readonly isWatched?: boolean;
}

export type ListCopyRequestMeta = {
  /** The title for the copy */
  readonly title: string;
  /** The id of the list to copy. */
  readonly idList: string; 
  /** The board into which to copy list. */
  readonly idBoard: string; 
} 

export type ListMoveRequestMeta = {
  /** The index where list shuld be in board. */
  readonly index: number;
  /** The id of the list to move. */
  readonly idList: string; 
  /** The id of the board into which to move list. */
  readonly idBoard: string; 
}

export type ListSortRequestMeta = {
  /** The id of the list whose sort method is to set. */
  readonly idList: string; 
  /** How to sort the list. */
  readonly method: ListBase["sortMethod"];
} 

export type ListCreateRequestMeta = ListCreateRequestMetaUnprepared & {
  /** The id for the list to create */
  readonly id: string;
} 

export type ListDestroyRequestMeta = {
  /** The id of the list to destroy along with its relevant data. */
  readonly idList: string;
}

export type ListMoveAllOwnCardsRequestMeta = {
  /** The id of the list whose own cards are to move. */
  readonly idListA: string; 
  /** The id of the list into which to move `from`'s own cards */
  readonly idListB: string;
} 

export type ListDestroyAllOwnCardsRequestMeta = {
  /** The id of the list whose own cards are to destrooy. */
  readonly idList: string;
}


// ---------- UNPREPARED REQUEST METAS

export type ListCreateRequestMetaUnprepared = {
  /** The title of the list to create. */
  readonly title: string;
  /** The id of the board for which to create a list. */
  readonly idBoard: string; 
}


// ---------- REQUEST META PREPARERS

export const prepareListCreateRequestMeta = (meta: ListCreateRequestMetaUnprepared): ListCreateRequestMeta => ({
  ...meta, 
  id: new Oid().toHexString(),
});


// ---------- REQUEST META FORMATTERS

export const formatAsListEditRequestMeta = OBJECT<ListEditRequestMeta>({
  title: Or([FIELDS.title, UNDEFINED()]),
  idList: OID(),
  isWatched: Or([FIELDS.isWatched, UNDEFINED()]),
});

export const formatAsListCopyRequestMeta = OBJECT<ListCopyRequestMeta>({
  title: FIELDS.title,
  idList: OID(), 
  idBoard: OID(), 
});

export const formatAsListMoveRequestMeta = OBJECT<ListMoveRequestMeta>({
  index: NUMBER({min: 0, nonNaN: true}),
  idList: OID(), 
  idBoard: OID(), 
});

export const formatAsListSortRequestMeta = OBJECT<ListSortRequestMeta>({
  idList: OID(), 
  method: FIELDS.sortMethod,
});

export const formatAsListCreateRequestMeta = OBJECT<ListCreateRequestMeta>({
  title: FIELDS.title,
  idBoard: OID(), 
});

export const formatAsListDestroyRequestMeta = OBJECT<ListDestroyRequestMeta>({
  idList: OID(),
});

export const formatAsListMoveAllOwnCardsRequestMeta = OBJECT<ListMoveAllOwnCardsRequestMeta>({
  idListA: OID(), 
  idListB: OID(),
});

export const formatAsListDestroyAllOwnCardsRequestMeta = OBJECT<ListDestroyAllOwnCardsRequestMeta>({
  idList: OID(),
});

export const formatAsListEditRequestMetaStrictly = WithError(formatAsListEditRequestMeta, () => (
  new TypeError("invalid list edit request meta")
));

export const formatAsListCopyRequestMetaStrictly = WithError(formatAsListCopyRequestMeta, () => (
  new TypeError("invalid list copy request meta")
));

export const formatAsListMoveRequestMetaStrictly = WithError(formatAsListMoveRequestMeta, () => (
  new TypeError("invalid list move request meta")
));

export const formatAsListSortRequestMetaStrictly = WithError(formatAsListSortRequestMeta, () => (
  new TypeError("invalid list sort request meta")
));

export const formatAsListCreateRequestMetaStrictly = WithError(formatAsListCreateRequestMeta, () => (
  new TypeError("invalid list create request meta")
));

export const formatAsListDestroyRequestMetaStrictly = WithError(formatAsListDestroyRequestMeta, () => (
  new TypeError("invalid list destroy request meta")
));

export const formatAsListMoveAllOwnCardsRequestMetaStrictly = WithError(formatAsListMoveAllOwnCardsRequestMeta, () => (
  new TypeError("invalid list move-all-own-cards request meta")
));

export const formatAsListDestroyAllOwnCardsRequestMetaStrictly = WithError(formatAsListDestroyAllOwnCardsRequestMeta, () => (
  new TypeError("invalid list destroy-all-own-cards request meta")
));


// ---------- REQUEST CREATORS

export const ListMoveRequest = (meta: ListMoveRequestMeta): Request => (
  new Request(URLS.MOVE, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const ListEditRequest = (meta: ListEditRequestMeta): Request => (
  new Request(URLS.EDIT, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const ListCopyRequest = (meta: ListCopyRequestMeta): Request => (
  new Request(URLS.COPY, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const ListSortRequest = (meta: ListSortRequestMeta): Request => (
  new Request(URLS.SORT, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const ListCreateRequest = (meta: ListCreateRequestMeta): Request => (
  new Request(URLS.CREATE, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const ListDestroyRequest = (meta: ListDestroyRequestMeta): Request => (
  new Request(URLS.DESTROY, {
    body: JSON.stringify(meta),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);

export const ListMoveAllOwnCardsRequest = (meta: ListMoveAllOwnCardsRequestMeta): Request => (
  new Request(URLS.OWN_CARDS_MOVED, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const ListDestroyAllOwnCardsRequest = (meta: ListDestroyAllOwnCardsRequestMeta): Request => (
  new Request(URLS.DESTROY_OWN_CARDS, {
    body: JSON.stringify(meta),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);


// ---------- RESPONSE BODIES

export type ListEditResponseBody = undefined
export type ListCopyResponseBody = {list: ListRawUnnested, labels: LabelRawUnnested[]}
export type ListMoveResponseBody = {list: ListRawUnnested, labels: LabelRawUnnested[]}
export type ListSortResponseBody = undefined
export type ListCreateResponseBody = undefined
export type ListDestroyResponseBody = undefined
export type ListMoveAllOwnCardsResponseBody = {cards: CardRawUnnested[], labels: LabelRawUnnested[]}
export type ListDestroyAllOwnCardsResponseBody = undefined


// ---------- RESPONSE BODY FORMATERS

export const formatListCopyResponseBody = OBJECT<ListCopyResponseBody>({
  list: list.rawUnnested.format,
  labels: label.rawUnnested.format,
});

export const formatListMoveResponseBody = OBJECT<ListMoveResponseBody>({
  list: list.rawUnnested.format,
  labels: label.rawUnnested.format,
});

export const formatListMoveAllOwnCardsResponseBody = OBJECT<ListMoveAllOwnCardsResponseBody>({
  cards: card.rawUnnested.format,
  labels: label.rawUnnested.format,
});

export const formatListCopyResponseBodyStrictly = WithError(formatListCopyResponseBody, () => (
  new TypeError("invalid list copy response body")
));

export const formatListMoveResponseBodyStrictly = WithError(formatListMoveResponseBody, () => (
  new TypeError("invalid list move response body")
));

export const formatListMoveAllOwnCardsResponseBodyStrictly = WithError(formatListMoveAllOwnCardsResponseBody, () => (
  new TypeError("invalid list move all own cards response body")
));


// ---------- ACTION TYPES

export const MOVE_PENDING = "list/move/pending";
export const MOVE_REJECTED = "list/move/rejected";
export const MOVE_FULFILLED = "list/move/fulfilled";
export const SORT_PENDING = "list/sort/pending";
export const SORT_REJECTED = "list/sort/rejected";
export const SORT_FULFILLED = "list/sort/fulfilled";
export const COPY_PENDING = "list/copy/pending";
export const COPY_REJECTED = "list/copy/rejected";
export const COPY_FULFILLED = "list/copy/fulfilled";
export const EDIT_PENDING = "list/edit/pending";
export const EDIT_REJECTED = "list/edit/rejected";
export const EDIT_FULFILLED = "list/edit/fulfilled";
export const CREATE_PENDING = "list/create/pending";
export const CREATE_REJECTED = "list/create/rejected";
export const CREATE_FULFILLED = "list/create/fulfilled";
export const DESTROY_PENDING = "list/destroy/pending";
export const DESTROY_REJECTED = "list/destroy/rejected";
export const DESTROY_FULFILLED = "list/destroy/fulfilled";
export const MOVE_ALL_OWN_CARDS_PENDING = "list/moveAllOwnCards/pending";
export const MOVE_ALL_OWN_CARDS_REJECTED = "list/moveAllOwnCards/rejected";
export const MOVE_ALL_OWN_CARDS_FULFILLED = "list/moveAllOwnCards/fulfilled";
export const DESTROY_ALL_OWN_CARDS_PENDING = "list/destroyAllOwnCards/pending";
export const DESTROY_ALL_OWN_CARDS_REJECTED = "list/destroyAllOwnCards/rejected";
export const DESTROY_ALL_OWN_CARDS_FULFILLED = "list/destroyAllOwnCards/fulfilled";


export type MOVE_PENDING = typeof MOVE_PENDING
export type MOVE_REJECTED = typeof MOVE_REJECTED
export type MOVE_FULFILLED = typeof MOVE_FULFILLED
export type SORT_PENDING = typeof SORT_PENDING
export type SORT_REJECTED = typeof SORT_REJECTED
export type SORT_FULFILLED = typeof SORT_FULFILLED
export type COPY_PENDING = typeof COPY_PENDING
export type COPY_REJECTED = typeof COPY_REJECTED
export type COPY_FULFILLED = typeof COPY_FULFILLED
export type EDIT_PENDING = typeof EDIT_PENDING
export type EDIT_REJECTED = typeof EDIT_REJECTED
export type EDIT_FULFILLED = typeof EDIT_FULFILLED
export type CREATE_PENDING = typeof CREATE_PENDING
export type CREATE_REJECTED = typeof CREATE_REJECTED
export type CREATE_FULFILLED = typeof CREATE_FULFILLED
export type DESTROY_PENDING = typeof DESTROY_PENDING
export type DESTROY_REJECTED = typeof DESTROY_REJECTED
export type DESTROY_FULFILLED = typeof DESTROY_FULFILLED
export type MOVE_ALL_OWN_CARDS_PENDING = typeof MOVE_ALL_OWN_CARDS_PENDING
export type MOVE_ALL_OWN_CARDS_REJECTED = typeof MOVE_ALL_OWN_CARDS_REJECTED
export type MOVE_ALL_OWN_CARDS_FULFILLED = typeof MOVE_ALL_OWN_CARDS_FULFILLED
export type DESTROY_ALL_OWN_CARDS_PENDING = typeof DESTROY_ALL_OWN_CARDS_PENDING
export type DESTROY_ALL_OWN_CARDS_REJECTED = typeof DESTROY_ALL_OWN_CARDS_REJECTED
export type DESTROY_ALL_OWN_CARDS_FULFILLED = typeof DESTROY_ALL_OWN_CARDS_FULFILLED


// ---------- ACTIONS

export type ListEditPendingAction = {
  type: EDIT_PENDING;
  meta: ListEditRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListEditRejectedAction = {
  type: EDIT_REJECTED;
  meta: ListEditRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListEditFulfilledAction = {
  type: EDIT_FULFILLED;
  meta: ListEditRequestMeta;
  error: undefined;
  payload: ListEditResponseBody;
}

export type ListMovePendingAction = {
  type: MOVE_PENDING;
  meta: ListMoveRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListMoveRejectedAction = {
  type: MOVE_REJECTED;
  meta: ListMoveRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListMoveFulfilledAction = {
  type: MOVE_FULFILLED;
  meta: ListMoveRequestMeta;
  error: undefined;
  payload: ListMoveResponseBody;
}

export type ListCopyPendingAction = {
  type: COPY_PENDING;
  meta: ListCopyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListCopyRejectedAction = {
  type: COPY_REJECTED;
  meta: ListCopyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListCopyFulfilledAction = {
  type: COPY_FULFILLED;
  meta: ListCopyRequestMeta;
  error: undefined;
  payload: ListCopyResponseBody;
}

export type ListSortPendingAction = {
  type: SORT_PENDING;
  meta: ListSortRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListSortRejectedAction = {
  type: SORT_REJECTED;
  meta: ListSortRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListSortFulfilledAction = {
  type: SORT_FULFILLED;
  meta: ListSortRequestMeta;
  error: undefined;
  payload: ListSortResponseBody;
}

export type ListCreatePendingAction = {
  type: CREATE_PENDING;
  meta: ListCreateRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListCreateRejectedAction = {
  type: CREATE_REJECTED;
  meta: ListCreateRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListCreateFulfilledAction = {
  type: CREATE_FULFILLED;
  meta: ListCreateRequestMeta;
  error: undefined;
  payload: ListCreateResponseBody;
}

export type ListDestroyPendingAction = {
  type: DESTROY_PENDING;
  meta: ListDestroyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListDestroyRejectedAction = {
  type: DESTROY_REJECTED;
  meta: ListDestroyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListDestroyFulfilledAction = {
  type: DESTROY_FULFILLED;
  meta: ListDestroyRequestMeta;
  error: undefined;
  payload: ListDestroyResponseBody;
}

export type ListMoveAllOwnCardsPendingAction = {
  type: MOVE_ALL_OWN_CARDS_PENDING;
  meta: ListMoveAllOwnCardsRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListMoveAllOwnCardsRejectedAction = {
  type: MOVE_ALL_OWN_CARDS_REJECTED;
  meta: ListMoveAllOwnCardsRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListMoveAllOwnCardsFulfilledAction = {
  type: MOVE_ALL_OWN_CARDS_FULFILLED;
  meta: ListMoveAllOwnCardsRequestMeta;
  error: undefined;
  payload: ListMoveAllOwnCardsResponseBody;
}

export type ListDestroyAllOwnCardsPendingAction = {
  type: DESTROY_ALL_OWN_CARDS_PENDING;
  meta: ListDestroyAllOwnCardsRequestMeta;
  error: undefined;
  payload: undefined;
}

export type ListDestroyAllOwnCardsRejectedAction = {
  type: DESTROY_ALL_OWN_CARDS_REJECTED;
  meta: ListDestroyAllOwnCardsRequestMeta;
  error: unknown;
  payload: undefined;
}

export type ListDestroyAllOwnCardsFulfilledAction = {
  type: DESTROY_ALL_OWN_CARDS_FULFILLED;
  meta: ListDestroyAllOwnCardsRequestMeta;
  error: undefined;
  payload: ListDestroyAllOwnCardsResponseBody;
}


// ---------- GROUPED ACTIONS

export type AnyAction = 
  | ListEditPendingAction
  | ListEditRejectedAction
  | ListEditFulfilledAction
  | ListMovePendingAction
  | ListMoveRejectedAction
  | ListMoveFulfilledAction
  | ListCopyPendingAction
  | ListCopyRejectedAction
  | ListCopyFulfilledAction
  | ListSortPendingAction
  | ListSortRejectedAction
  | ListSortFulfilledAction
  | ListCreatePendingAction
  | ListCreateRejectedAction
  | ListCreateFulfilledAction
  | ListDestroyPendingAction
  | ListDestroyRejectedAction
  | ListDestroyFulfilledAction
  | ListMoveAllOwnCardsPendingAction
  | ListMoveAllOwnCardsRejectedAction
  | ListMoveAllOwnCardsFulfilledAction
  | ListDestroyAllOwnCardsPendingAction
  | ListDestroyAllOwnCardsRejectedAction
  | ListDestroyAllOwnCardsFulfilledAction

export type AllActions = {
  [EDIT_PENDING]: ListEditPendingAction;
  [EDIT_REJECTED]: ListEditRejectedAction;
  [EDIT_FULFILLED]: ListEditFulfilledAction;
  [MOVE_PENDING]: ListMovePendingAction;
  [MOVE_REJECTED]: ListMoveRejectedAction;
  [MOVE_FULFILLED]: ListMoveFulfilledAction;
  [COPY_PENDING]: ListCopyPendingAction;
  [COPY_REJECTED]: ListCopyRejectedAction;
  [COPY_FULFILLED]: ListCopyFulfilledAction;
  [SORT_PENDING]: ListSortPendingAction;
  [SORT_REJECTED]: ListSortRejectedAction;
  [SORT_FULFILLED]: ListSortFulfilledAction;
  [CREATE_PENDING]: ListCreatePendingAction;
  [CREATE_REJECTED]: ListCreateRejectedAction;
  [CREATE_FULFILLED]: ListCreateFulfilledAction;
  [DESTROY_PENDING]: ListDestroyPendingAction;
  [DESTROY_REJECTED]: ListDestroyRejectedAction;
  [DESTROY_FULFILLED]: ListDestroyFulfilledAction;
  [MOVE_ALL_OWN_CARDS_PENDING]: ListMoveAllOwnCardsPendingAction;
  [MOVE_ALL_OWN_CARDS_REJECTED]: ListMoveAllOwnCardsRejectedAction;
  [MOVE_ALL_OWN_CARDS_FULFILLED]: ListMoveAllOwnCardsFulfilledAction;
  [DESTROY_ALL_OWN_CARDS_PENDING]: ListDestroyAllOwnCardsPendingAction;
  [DESTROY_ALL_OWN_CARDS_REJECTED]: ListDestroyAllOwnCardsRejectedAction;
  [DESTROY_ALL_OWN_CARDS_FULFILLED]: ListDestroyAllOwnCardsFulfilledAction;  
}


// ---------- ACTION CREATORS

export const ListEditPendingAction = (meta: ListEditRequestMeta): ListEditPendingAction => ({
  type: EDIT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListEditRejectedAction = (meta: ListEditRequestMeta, error: unknown): ListEditRejectedAction => ({
  type: EDIT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListEditFulfilledAction = (meta: ListEditRequestMeta, payload: ListEditResponseBody): ListEditFulfilledAction => ({
  type: EDIT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ListMovePendingAction = (meta: ListMoveRequestMeta): ListMovePendingAction => ({
  type: MOVE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListMoveRejectedAction = (meta: ListMoveRequestMeta, error: unknown): ListMoveRejectedAction => ({
  type: MOVE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListMoveFulfilledAction = (meta: ListMoveRequestMeta, payload: ListMoveResponseBody): ListMoveFulfilledAction => ({
  type: MOVE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ListCopyPendingAction = (meta: ListCopyRequestMeta): ListCopyPendingAction => ({
  type: COPY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListCopyRejectedAction = (meta: ListCopyRequestMeta, error: unknown): ListCopyRejectedAction => ({
  type: COPY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListCopyFulfilledAction = (meta: ListCopyRequestMeta, payload: ListCopyResponseBody): ListCopyFulfilledAction => ({
  type: COPY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ListSortPendingAction = (meta: ListSortRequestMeta): ListSortPendingAction => ({
  type: SORT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListSortRejectedAction = (meta: ListSortRequestMeta, error: unknown): ListSortRejectedAction => ({
  type: SORT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListSortFulfilledAction = (meta: ListSortRequestMeta, payload: ListSortResponseBody): ListSortFulfilledAction => ({
  type: SORT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ListCreatePendingAction = (meta: ListCreateRequestMeta): ListCreatePendingAction => ({
  type: CREATE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListCreateRejectedAction = (meta: ListCreateRequestMeta, error: unknown): ListCreateRejectedAction => ({
  type: CREATE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListCreateFulfilledAction = (meta: ListCreateRequestMeta, payload: ListCreateResponseBody): ListCreateFulfilledAction => ({
  type: CREATE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ListDestroyPendingAction = (meta: ListDestroyRequestMeta): ListDestroyPendingAction => ({
  type: DESTROY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListDestroyRejectedAction = (meta: ListDestroyRequestMeta, error: unknown): ListDestroyRejectedAction => ({
  type: DESTROY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListDestroyFulfilledAction = (meta: ListDestroyRequestMeta, payload: ListDestroyResponseBody): ListDestroyFulfilledAction => ({
  type: DESTROY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ListMoveAllOwnCardsPendingAction = (meta: ListMoveAllOwnCardsRequestMeta): ListMoveAllOwnCardsPendingAction => ({
  type: MOVE_ALL_OWN_CARDS_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListMoveAllOwnCardsRejectedAction = (meta: ListMoveAllOwnCardsRequestMeta, error: unknown): ListMoveAllOwnCardsRejectedAction => ({
  type: MOVE_ALL_OWN_CARDS_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListMoveAllOwnCardsFulfilledAction = (meta: ListMoveAllOwnCardsRequestMeta, payload: ListMoveAllOwnCardsResponseBody): ListMoveAllOwnCardsFulfilledAction => ({
  type: MOVE_ALL_OWN_CARDS_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const ListDestroyAllOwnCardsPendingAction = (meta: ListDestroyAllOwnCardsRequestMeta): ListDestroyAllOwnCardsPendingAction => ({
  type: DESTROY_ALL_OWN_CARDS_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const ListDestroyAllOwnCardsRejectedAction = (meta: ListDestroyAllOwnCardsRequestMeta, error: unknown): ListDestroyAllOwnCardsRejectedAction => ({
  type: DESTROY_ALL_OWN_CARDS_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const ListDestroyAllOwnCardsFulfilledAction = (meta: ListDestroyAllOwnCardsRequestMeta, payload: ListDestroyAllOwnCardsResponseBody): ListDestroyAllOwnCardsFulfilledAction => ({
  type: DESTROY_ALL_OWN_CARDS_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});


// ---------- THUNKS

export const edit = ApiMutator<
  ListEditRequestMeta,
  ListEditResponseBody,
  ListEditPendingAction,
  ListEditRejectedAction,
  ListEditFulfilledAction
>({
  request: ListEditRequest,
  pending: ListEditPendingAction, 
  rejected: ListEditRejectedAction, 
  fulfilled: ListEditFulfilledAction, 
});

export const move = ApiMutator<
  ListMoveRequestMeta,
  ListMoveResponseBody,
  ListMovePendingAction,
  ListMoveRejectedAction,
  ListMoveFulfilledAction
>({
  format: formatListMoveResponseBodyStrictly,
  request: ListMoveRequest,
  pending: ListMovePendingAction, 
  rejected: ListMoveRejectedAction, 
  fulfilled: ListMoveFulfilledAction, 
});


export const copy = ApiMutator<
  ListCopyRequestMeta,
  ListCopyResponseBody,
  ListCopyPendingAction,
  ListCopyRejectedAction,
  ListCopyFulfilledAction
>({
  format: formatListCopyResponseBodyStrictly,
  request: ListCopyRequest,
  pending: ListCopyPendingAction, 
  rejected: ListCopyRejectedAction, 
  fulfilled: ListCopyFulfilledAction, 
});

export const sort = ApiMutator<
  ListSortRequestMeta,
  ListSortResponseBody,
  ListSortPendingAction,
  ListSortRejectedAction,
  ListSortFulfilledAction
>({
  request: ListSortRequest,
  pending: ListSortPendingAction, 
  rejected: ListSortRejectedAction, 
  fulfilled: ListSortFulfilledAction, 
});


export const create = ApiMutator<
  ListCreateRequestMeta,
  ListCreateResponseBody,
  ListCreatePendingAction,
  ListCreateRejectedAction,
  ListCreateFulfilledAction,
  ListCreateRequestMetaUnprepared
>({
  prepare: prepareListCreateRequestMeta,
  request: ListCreateRequest,
  pending: ListCreatePendingAction, 
  rejected: ListCreateRejectedAction, 
  fulfilled: ListCreateFulfilledAction, 
});


export const destroy = ApiMutator<
  ListDestroyRequestMeta,
  ListDestroyResponseBody,
  ListDestroyPendingAction,
  ListDestroyRejectedAction,
  ListDestroyFulfilledAction
>({
  request: ListDestroyRequest,
  pending: ListDestroyPendingAction, 
  rejected: ListDestroyRejectedAction, 
  fulfilled: ListDestroyFulfilledAction, 
});

export const moveAllOwnCards = ApiMutator<
  ListMoveAllOwnCardsRequestMeta,
  ListMoveAllOwnCardsResponseBody,
  ListMoveAllOwnCardsPendingAction,
  ListMoveAllOwnCardsRejectedAction,
  ListMoveAllOwnCardsFulfilledAction
>({
  format: formatListMoveAllOwnCardsResponseBodyStrictly,
  request: ListMoveAllOwnCardsRequest,
  pending: ListMoveAllOwnCardsPendingAction, 
  rejected: ListMoveAllOwnCardsRejectedAction, 
  fulfilled: ListMoveAllOwnCardsFulfilledAction, 
});

export const destroyAllOwnCards = ApiMutator<
  ListDestroyAllOwnCardsRequestMeta,
  ListDestroyAllOwnCardsResponseBody,
  ListDestroyAllOwnCardsPendingAction,
  ListDestroyAllOwnCardsRejectedAction,
  ListDestroyAllOwnCardsFulfilledAction
>({
  request: ListDestroyAllOwnCardsRequest,
  pending: ListDestroyAllOwnCardsPendingAction, 
  rejected: ListDestroyAllOwnCardsRejectedAction, 
  fulfilled: ListDestroyAllOwnCardsFulfilledAction, 
});


export default Object.freeze({
  prepareListCreateRequestMeta,
  ListMoveRequest,
  ListEditRequest,
  ListCopyRequest,
  ListSortRequest,
  ListCreateRequest,
  ListDestroyRequest,
  ListMoveAllOwnCardsRequest,
  ListDestroyAllOwnCardsRequest,
  formatListCopyResponseBody,
  formatListMoveResponseBody,
  formatListMoveAllOwnCardsResponseBody,
  formatListCopyResponseBodyStrictly,
  formatListMoveResponseBodyStrictly,
  formatListMoveAllOwnCardsResponseBodyStrictly,
  MOVE_PENDING,
  MOVE_REJECTED,
  MOVE_FULFILLED,
  SORT_PENDING,
  SORT_REJECTED,
  SORT_FULFILLED,
  COPY_PENDING,
  COPY_REJECTED,
  COPY_FULFILLED,
  EDIT_PENDING,
  EDIT_REJECTED,
  EDIT_FULFILLED,
  CREATE_PENDING,
  CREATE_REJECTED,
  CREATE_FULFILLED,
  DESTROY_PENDING,
  DESTROY_REJECTED,
  DESTROY_FULFILLED,
  MOVE_ALL_OWN_CARDS_PENDING,
  MOVE_ALL_OWN_CARDS_REJECTED,
  MOVE_ALL_OWN_CARDS_FULFILLED,
  DESTROY_ALL_OWN_CARDS_PENDING,
  DESTROY_ALL_OWN_CARDS_REJECTED,
  DESTROY_ALL_OWN_CARDS_FULFILLED,
  ListEditPendingAction,
  ListEditRejectedAction,
  ListEditFulfilledAction,
  ListMovePendingAction,
  ListMoveRejectedAction,
  ListMoveFulfilledAction,
  ListCopyPendingAction,
  ListCopyRejectedAction,
  ListCopyFulfilledAction,
  ListSortPendingAction,
  ListSortRejectedAction,
  ListSortFulfilledAction,
  ListCreatePendingAction,
  ListCreateRejectedAction,
  ListCreateFulfilledAction,
  ListDestroyPendingAction,
  ListDestroyRejectedAction,
  ListDestroyFulfilledAction,
  ListMoveAllOwnCardsPendingAction,
  ListMoveAllOwnCardsRejectedAction,
  ListMoveAllOwnCardsFulfilledAction,
  ListDestroyAllOwnCardsPendingAction,
  ListDestroyAllOwnCardsRejectedAction,
  ListDestroyAllOwnCardsFulfilledAction,
  edit,
  move,
  copy,
  sort,
  create,
  destroy,
  moveAllOwnCards,
  destroyAllOwnCards,
});