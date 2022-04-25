import URLS from "../endpoints";
import {Oid} from "/util/idUtil";
import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import {Format} from "/util/formatter";
import {BOOLEAN} from "/util/formatter";
import ApiMutator from "/api/mutator";
import {LabelBase} from "/features/labels/entity";
import BOARD_FIELDS from "/features/boards/fields";
import LABEL_FIELDS from "/features/labels/fields";
import LABEL_COLORS from "/features/labels/constants/colors";
import {BoardNative} from "../entity";
import {BoardRawUnnested} from "../entity";
import {formatAsBoardRawUnnested} from "../entity";


// ---------- PREPARED REQUEST METAS

export type BoardEditRequestMeta = {
  readonly title?: string;
  readonly theme?: BoardNative["theme"];
  readonly idBoard: string;
  readonly isStarred?: boolean;
}

export type BoardCopyRequestMeta = {
  readonly title: string;
  readonly idBoard: string; 
  readonly keepCards: boolean;
}

export type BoardCreateRequestMeta = BoardCreateRequestMetaUnprepared & {
  /** The id for the board to create */
  readonly id: string;
  /** A description for the labels to pre create for the board */
  readonly labels: {
    /** The id for the label to create */
    id: string;
    /** The name for the label to create */
    name: LabelBase["name"];
    /** The color for the label to create */
    color: LabelBase["color"];
  }[];
}

export type BoardDestroyRequestMeta = {
  readonly idBoard: string;
}


// ---------- UNPREPARED REQUEST METAS

export type BoardCreateRequestMetaUnprepared = {
  readonly title: string; 
  readonly theme: BoardNative["theme"];
}


// ---------- REQUEST META PREPARERS

export const prepareBoardCreateRequestMeta = (meta: BoardCreateRequestMetaUnprepared): BoardCreateRequestMeta => ({
  id: new Oid().toHexString(),
  theme: meta.theme,
  title: meta.title,
  labels: LABEL_COLORS.map(color => ({
    id: new Oid().toHexString(), 
    name: null, 
    color: color.name,
  })),
});


// ---------- REQUEST META FORMATTERS

export const formatAsBoardEditRequestMeta = OBJECT({
  title: BOARD_FIELDS.title.copy({optional: true}),
  theme: BOARD_FIELDS.theme.copy({optional: true}),
  idBoard: OID(),
  isStarred: BOARD_FIELDS.isStarred.copy({optional: true}),
}, {
  name: "BoardEditRequestMeta",
});

export const formatAsBoardCopyRequestMeta = OBJECT({
  title: BOARD_FIELDS.title,
  idBoard: OID(), 
  keepCards: BOOLEAN(),
}, {
  name: "BoardCopyRequestMeta",
});

export const formatAsBoardCreateRequestMeta = OBJECT({
  id: OID(),
  title: BOARD_FIELDS.title, 
  theme: BOARD_FIELDS.theme,
  labels: ARRAY([
    OBJECT({
      id: OID(),
      name: LABEL_FIELDS.name,
      color: LABEL_FIELDS.color,
    }),
  ]),
}, {
  name: "BoardCreateRequestMeta",
});

export const formatAsBoardDestroyRequestMeta = OBJECT({
  idBoard: OID(),
}, {
  name: "BoardDestroyRequestMeta",
});


// ---------- REQUEST CREATORS

export const BoardCopyRequest = (meta: BoardCopyRequestMeta): Request => (
  new Request(URLS.COPY, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const BoardEditRequest = (meta: BoardEditRequestMeta): Request => (
  new Request(URLS.EDIT, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const BoardCreateRequest = (meta: BoardCreateRequestMeta): Request => (
  new Request(URLS.CREATE, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const BoardDestroyRequest = (meta: BoardDestroyRequestMeta): Request => (
  new Request(URLS.DESTROY, {
    body: JSON.stringify(meta),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);


// ---------- RESPONSE BODIES

export type BoardEditResponseBody = undefined;
export type BoardCopyResponseBody = BoardRawUnnested
export type BoardCreateResponseBody = BoardRawUnnested
export type BoardDestroyResponseBody = undefined;


// ---------- RESPONSE BODY FORMATTERS

export const formatAsBoardCopyResponseBody = formatAsBoardRawUnnested.copy({
  name: "BoardCopyResponseBody",
});

export const formatAsBoardCreateResponseBody = formatAsBoardRawUnnested.copy({
  name: "BoardCreateResponseBpdy",
});


// ---------- ACTION TYPES

export const EDIT_PENDING = "boards/edit/pending";
export const EDIT_REJECTED = "boards/edit/rejected";
export const EDIT_FULFILLED = "boards/edit/fulfilled";
export const COPY_PENDING = "boards/copy/pending";
export const COPY_REJECTED = "boards/copy/rejected";
export const COPY_FULFILLED = "boards/copy/fulfilled";
export const CREATE_PENDING = "boards/create/pending";
export const CREATE_REJECTED = "boards/create/rejected";
export const CREATE_FULFILLED = "boards/create/fulfilled";
export const DESTROY_PENDING = "boards/destroy/pending";
export const DESTROY_REJECTED = "boards/destroy/rejected";
export const DESTROY_FULFILLED = "boards/destroy/fulfilled";


export type EDIT_PENDING = typeof EDIT_PENDING
export type EDIT_REJECTED = typeof EDIT_REJECTED
export type EDIT_FULFILLED = typeof EDIT_FULFILLED
export type COPY_PENDING = typeof COPY_PENDING
export type COPY_REJECTED = typeof COPY_REJECTED
export type COPY_FULFILLED = typeof COPY_FULFILLED
export type CREATE_PENDING = typeof CREATE_PENDING
export type CREATE_REJECTED = typeof CREATE_REJECTED
export type CREATE_FULFILLED = typeof CREATE_FULFILLED
export type DESTROY_PENDING = typeof DESTROY_PENDING
export type DESTROY_REJECTED = typeof DESTROY_REJECTED
export type DESTROY_FULFILLED = typeof DESTROY_FULFILLED


// ---------- ACTIONS 

export type BoardEditPendingAction = {
  type: EDIT_PENDING; 
  meta: BoardEditRequestMeta; 
  error: undefined;
  payload: undefined;
}

export type BoardEditRejectedAction = {
  type: EDIT_REJECTED;
  meta: BoardEditRequestMeta;
  error: unknown;
  payload: undefined;
}

export type BoardEditFulfilledAction = {
  type: EDIT_FULFILLED; 
  meta: BoardEditRequestMeta;
  error: undefined;
  payload: BoardEditResponseBody;
}

export type BoardCopyPendingAction = {
  type: COPY_PENDING; 
  meta: BoardCopyRequestMeta; 
  error: undefined;
  payload: undefined;
}

export type BoardCopyRejectedAction = {
  type: COPY_REJECTED; 
  meta: BoardCopyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type BoardCopyFulfilledAction = {
  type: COPY_FULFILLED; 
  meta: BoardCopyRequestMeta; 
  error: undefined;
  payload: BoardCopyResponseBody;
}

export type BoardCreatePendingAction = {
  type: CREATE_PENDING; 
  meta: BoardCreateRequestMeta; 
  error: undefined;
  payload: undefined;
}

export type BoardCreateRejectedAction = {
  type: CREATE_REJECTED; 
  meta: BoardCreateRequestMeta;
  error: unknown; 
  payload: undefined;
}

export type BoardCreateFulfilledAction = {
  type: CREATE_FULFILLED; 
  meta: BoardCreateRequestMeta; 
  error: undefined;
  payload: BoardCreateResponseBody;
}

export type BoardDestroyPendingAction = {
  type: DESTROY_PENDING; 
  meta: BoardDestroyRequestMeta; 
  error: undefined;
  payload: undefined;
}

export type BoardDestroyRejectedAction = {
  type: DESTROY_REJECTED; 
  meta: BoardDestroyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type BoardDestroyFulfilledAction = {
  type: DESTROY_FULFILLED; 
  meta: BoardDestroyRequestMeta; 
  error: undefined;
  payload: BoardDestroyResponseBody;
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | BoardEditPendingAction
  | BoardEditRejectedAction
  | BoardEditFulfilledAction
  | BoardCopyPendingAction
  | BoardCopyRejectedAction
  | BoardCopyFulfilledAction
  | BoardCreatePendingAction
  | BoardCreateRejectedAction
  | BoardCreateFulfilledAction
  | BoardDestroyPendingAction
  | BoardDestroyRejectedAction
  | BoardDestroyFulfilledAction

export type AllActions = {
  [EDIT_PENDING]: BoardEditPendingAction;
  [EDIT_REJECTED]: BoardEditRejectedAction;
  [EDIT_FULFILLED]: BoardEditFulfilledAction;
  [COPY_PENDING]: BoardCopyPendingAction;
  [COPY_REJECTED]: BoardCopyRejectedAction;
  [COPY_FULFILLED]: BoardCopyFulfilledAction;
  [CREATE_PENDING]: BoardCreatePendingAction;
  [CREATE_REJECTED]: BoardCreateRejectedAction;
  [CREATE_FULFILLED]: BoardCreateFulfilledAction;
  [DESTROY_PENDING]: BoardDestroyPendingAction;
  [DESTROY_REJECTED]: BoardDestroyRejectedAction;
  [DESTROY_FULFILLED]: BoardDestroyFulfilledAction;  
}


// ---------- ACTION CREATORS

export const BoardEditPendingAction = (meta: BoardEditRequestMeta): BoardEditPendingAction => ({
  type: EDIT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const BoardEditRejectedAction = (meta: BoardEditRequestMeta, error: unknown): BoardEditRejectedAction => ({
  type: EDIT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const BoardEditFulfilledAction = (meta: BoardEditRequestMeta, payload: BoardEditResponseBody): BoardEditFulfilledAction => ({
  type: EDIT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const BoardCopyPendingAction = (meta: BoardCopyRequestMeta): BoardCopyPendingAction => ({
  type: COPY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const BoardCopyRejectedAction = (meta: BoardCopyRequestMeta, error: unknown): BoardCopyRejectedAction => ({
  type: COPY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const BoardCopyFulfilledAction = (meta: BoardCopyRequestMeta, payload: BoardCopyResponseBody): BoardCopyFulfilledAction => ({
  type: COPY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const BoardCreatePendingAction = (meta: BoardCreateRequestMeta): BoardCreatePendingAction => ({
  type: CREATE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const BoardCreateRejectedAction = (meta: BoardCreateRequestMeta, error: unknown): BoardCreateRejectedAction => ({
  type: CREATE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const BoardCreateFulfilledAction = (meta: BoardCreateRequestMeta, payload: BoardCreateResponseBody): BoardCreateFulfilledAction => ({
  type: CREATE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const BoardDestroyPendingAction = (meta: BoardDestroyRequestMeta): BoardDestroyPendingAction => ({
  type: DESTROY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const BoardDestroyRejectedAction = (meta: BoardDestroyRequestMeta, error: unknown): BoardDestroyRejectedAction => ({
  type: DESTROY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const BoardDestroyFulfilledAction = (meta: BoardDestroyRequestMeta, payload: BoardDestroyResponseBody): BoardDestroyFulfilledAction => ({
  type: DESTROY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});


// ---------- THUNKS

export const copy = ApiMutator<
  BoardCopyRequestMeta,
  BoardCopyResponseBody,
  BoardCopyPendingAction,
  BoardCopyRejectedAction,
  BoardCopyFulfilledAction
>({
  format: formatAsBoardCopyResponseBody.copy({strict: true}),
  request: BoardCopyRequest,
  pending: BoardCopyPendingAction,
  rejected: BoardCopyRejectedAction,
  fulfilled: BoardCopyFulfilledAction,
});

export const edit = ApiMutator<
  BoardEditRequestMeta,
  BoardEditResponseBody,
  BoardEditPendingAction,
  BoardEditRejectedAction,
  BoardEditFulfilledAction
>({
  request: BoardEditRequest,
  pending: BoardEditPendingAction,
  rejected: BoardEditRejectedAction,
  fulfilled: BoardEditFulfilledAction,
});

export const create = ApiMutator<
  BoardCreateRequestMeta,
  BoardCreateResponseBody,
  BoardCreatePendingAction,
  BoardCreateRejectedAction,
  BoardCreateFulfilledAction,
  BoardCreateRequestMetaUnprepared
>({
  format: formatAsBoardCreateResponseBody.copy({strict: true}),
  request: BoardCreateRequest,
  prepare: prepareBoardCreateRequestMeta,
  pending: BoardCreatePendingAction,
  rejected: BoardCreateRejectedAction,
  fulfilled: BoardCreateFulfilledAction,
});

export const destroy = ApiMutator<
  BoardDestroyRequestMeta,
  BoardDestroyResponseBody,
  BoardDestroyPendingAction,
  BoardDestroyRejectedAction,
  BoardDestroyFulfilledAction
>({
  request: BoardDestroyRequest,
  pending: BoardDestroyPendingAction,
  rejected: BoardDestroyRejectedAction,
  fulfilled: BoardDestroyFulfilledAction,
});


export default Object.freeze({
  prepareBoardCreateRequestMeta,
  formatAsBoardEditRequestMeta,
  formatAsBoardCopyRequestMeta,
  formatAsBoardCreateRequestMeta,
  formatAsBoardDestroyRequestMeta,
  BoardCopyRequest,
  BoardEditRequest,
  BoardCreateRequest,
  BoardDestroyRequest,
  formatAsBoardCopyResponseBody,
  formatAsBoardCreateResponseBody,
  EDIT_PENDING,
  EDIT_REJECTED,
  EDIT_FULFILLED,
  COPY_PENDING,
  COPY_REJECTED,
  COPY_FULFILLED,
  CREATE_PENDING,
  CREATE_REJECTED,
  CREATE_FULFILLED,
  DESTROY_PENDING,
  DESTROY_REJECTED,
  DESTROY_FULFILLED,
  BoardEditPendingAction,
  BoardEditRejectedAction,
  BoardEditFulfilledAction,
  BoardCopyPendingAction,
  BoardCopyRejectedAction,
  BoardCopyFulfilledAction,
  BoardCreatePendingAction,
  BoardCreateRejectedAction,
  BoardCreateFulfilledAction,
  BoardDestroyPendingAction,
  BoardDestroyRejectedAction,
  BoardDestroyFulfilledAction,
  copy,
  edit,
  create,
  destroy,
});