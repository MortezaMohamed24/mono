import URLS from "/features/user/endpoints";
import {OBJECT} from "/util/formatter";
import {UserRaw} from "../entity";
import {password} from "/features/user/fields";
import ApiQuerier from "/api/querier";
import ApiMutator from "/api/mutator";
import {initials} from "/features/user/fields";
import {username} from "/features/user/fields";
import {lastname} from "/features/user/fields";
import {firstname} from "/features/user/fields";
import {formatAsUserRaw} from "../entity";


// ----------  REQUEST METAS

export type UserLoadRequestMeta = undefined

export type UserEditRequestMeta = {
  /** The new username for user. */
  readonly username?: string;
  /** The new first name for user. */
  readonly firstname?: string;
  /** The new last name for user. */
  readonly lastname?: string;
  /** The new initials for user. */
  readonly initials?: string;
  /** The new passwrod for user. */
  readonly passwrod?: string;
}

export type UserCreateRequestMeta = {
  /** The username of the user to create. */
  readonly username: string; 
  /** The first name of the user to create. */
  readonly firstname: string; 
  /** The password of the user to create. */
  readonly password: string;
  /** The last name of the user to create. */
  readonly lastname: string; 
}

export type UserDestroyRequestMeta = undefined



// ---------- REQUEST META FORMATTERS

export const formatAsUserEditRequestMeta = OBJECT({
  username: username.copy({optional: true}),
  passwrod: password.copy({optional: true}),
  initials: initials.copy({optional: true}),
  lastname: lastname.copy({optional: true}),
  fistname: firstname.copy({optional: true}),
}, {
  name: "UserEditRequestMeta",
});

export const formatAsUserCreateRequestMeta = OBJECT({
  username: username, 
  password: password,
  lastname: lastname, 
  firstname: firstname, 
}, {
  name: "UserCreateRequestMeta",
});


// ---------- REQUEST CREATORS

export const UserLoadRequest = (): Request => (
  new Request(new URL(URLS.LOAD).href, {
    method: "GET",
  })
);

export const UserEditRequest = (meta: UserEditRequestMeta): Request => (
  new Request(URLS.EDIT, {
    body: JSON.stringify(meta),
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
  })
);

export const UserCreateRequest = (meta: UserCreateRequestMeta): Request => (
  new Request(URLS.CREATE, {
    body: JSON.stringify(meta),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })
);

export const UserDestroyRequest = (meta: UserDestroyRequestMeta): Request => (
  new Request(URLS.DESTROY, {
    body: JSON.stringify(meta),
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
  })
);


// ---------- RESPONSE BODIES

export type UserLoadResponseBody = UserRaw;
export type UserEditResponseBody = undefined;
export type UserCreateResponseBody = undefined;
export type UserDestroyResponseBody = undefined;


// ---------- RESPONSE BODY FORMATTERS

export const formatAsUserLoadResponseBody = formatAsUserRaw;


// ---------- ACTION TYPES

export const LOAD_PENDING = "user/load/pending";
export const LOAD_REJECTED = "user/load/rejected";
export const LOAD_FULFILLED = "user/load/fulfilled";
export const EDIT_PENDING = "user/edit/pending";
export const EDIT_REJECTED = "user/edit/rejected";
export const EDIT_FULFILLED = "user/edit/fulfilled";
export const CREATE_PENDING = "user/create/pending";
export const CREATE_REJECTED = "user/create/rejected";
export const CREATE_FULFILLED = "user/create/fulfilled";
export const DESTROY_PENDING = "user/destroy/pending";
export const DESTROY_REJECTED = "user/destroy/rejected";
export const DESTROY_FULFILLED = "user/destroy/fulfilled";

export type LOAD_PENDING = typeof LOAD_PENDING
export type LOAD_REJECTED = typeof LOAD_REJECTED
export type LOAD_FULFILLED = typeof LOAD_FULFILLED
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

export type UserEditPendingAction = {
  type: EDIT_PENDING;
  meta: UserEditRequestMeta;
  error: undefined;
  payload: undefined;
}

export type UserEditRejectedAction = {
  type: EDIT_REJECTED;
  meta: UserEditRequestMeta;
  error: unknown;
  payload: undefined;
}

export type UserEditFulfilledAction = {
  type: EDIT_FULFILLED;
  meta: UserEditRequestMeta;
  error: undefined;
  payload: UserEditResponseBody;
}

export type UserLoadPendingAction = {
  type: LOAD_PENDING;
  meta: undefined;
  error: undefined;
  payload: undefined;
}

export type UserLoadRejectedAction = {
  type: LOAD_REJECTED;
  meta: undefined;
  error: unknown;
  payload: undefined;
}

export type UserLoadFulfilledAction = {
  type: LOAD_FULFILLED;
  meta: undefined;
  error: undefined;
  payload: UserLoadResponseBody;
}

export type UserCreatePendingAction = {
  type: CREATE_PENDING;
  meta: UserCreateRequestMeta;
  error: undefined;
  payload: undefined;
}

export type UserCreateRejectedAction = {
  type: CREATE_REJECTED;
  meta: UserCreateRequestMeta;
  error: unknown;
  payload: undefined;
}

export type UserCreateFulfilledAction = {
  type: CREATE_FULFILLED;
  meta: UserCreateRequestMeta;
  error: undefined;
  payload: UserCreateResponseBody;
}

export type UserDestroyPendingAction = {
  type: DESTROY_PENDING;
  meta: UserDestroyRequestMeta;
  error: undefined;
  payload: undefined;
}

export type UserDestroyRejectedAction = {
  type: DESTROY_REJECTED;
  meta: UserDestroyRequestMeta;
  error: unknown;
  payload: undefined;
}

export type UserDestroyFulfilledAction = {
  type: DESTROY_FULFILLED;
  meta: UserDestroyRequestMeta;
  error: undefined;
  payload: UserDestroyResponseBody;
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | UserEditPendingAction
  | UserEditRejectedAction
  | UserEditFulfilledAction
  | UserLoadPendingAction
  | UserLoadRejectedAction
  | UserLoadFulfilledAction
  | UserCreatePendingAction
  | UserCreateRejectedAction
  | UserCreateFulfilledAction
  | UserDestroyPendingAction
  | UserDestroyRejectedAction
  | UserDestroyFulfilledAction

export type AllActions = {
  [EDIT_PENDING]: UserEditPendingAction;
  [EDIT_REJECTED]: UserEditRejectedAction;
  [EDIT_FULFILLED]: UserEditFulfilledAction;
  [LOAD_PENDING]: UserLoadPendingAction;
  [LOAD_REJECTED]: UserLoadRejectedAction;
  [LOAD_FULFILLED]: UserLoadFulfilledAction;
  [CREATE_PENDING]: UserCreatePendingAction;
  [CREATE_REJECTED]: UserCreateRejectedAction;
  [CREATE_FULFILLED]: UserCreateFulfilledAction;
  [DESTROY_PENDING]: UserDestroyPendingAction;
  [DESTROY_REJECTED]: UserDestroyRejectedAction;
  [DESTROY_FULFILLED]: UserDestroyFulfilledAction; 
}


// ---------- ACTION CREATORS

export const UserEditPendingAction = (meta: UserEditRequestMeta): UserEditPendingAction => ({
  type: EDIT_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const UserEditRejectedAction = (meta: UserEditRequestMeta, error: unknown): UserEditRejectedAction => ({
  type: EDIT_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const UserEditFulfilledAction = (meta: UserEditRequestMeta, payload: UserEditResponseBody): UserEditFulfilledAction => ({
  type: EDIT_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const UserLoadPendingAction = (meta: UserLoadRequestMeta): UserLoadPendingAction => ({
  type: LOAD_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const UserLoadRejectedAction = (meta: UserLoadRequestMeta, error: unknown): UserLoadRejectedAction => ({
  type: LOAD_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const UserLoadFulfilledAction = (meta: UserLoadRequestMeta, payload: UserLoadResponseBody): UserLoadFulfilledAction => ({
  type: LOAD_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const UserCreatePendingAction = (meta: UserCreateRequestMeta): UserCreatePendingAction => ({
  type: CREATE_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const UserCreateRejectedAction = (meta: UserCreateRequestMeta, error: unknown): UserCreateRejectedAction => ({
  type: CREATE_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const UserCreateFulfilledAction = (meta: UserCreateRequestMeta, payload: UserCreateResponseBody): UserCreateFulfilledAction => ({
  type: CREATE_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});

export const UserDestroyPendingAction = (meta: UserDestroyRequestMeta): UserDestroyPendingAction => ({
  type: DESTROY_PENDING,
  meta: meta,
  error: undefined,
  payload: undefined,
});

export const UserDestroyRejectedAction = (meta: UserDestroyRequestMeta, error: unknown): UserDestroyRejectedAction => ({
  type: DESTROY_REJECTED,
  meta: meta,
  error: error,
  payload: undefined,
});

export const UserDestroyFulfilledAction = (meta: UserDestroyRequestMeta, payload: UserDestroyResponseBody): UserDestroyFulfilledAction => ({
  type: DESTROY_FULFILLED,
  meta: meta,
  error: undefined,
  payload: payload,
});


// ---------- THUNKS

export const edit = ApiMutator<
  UserEditRequestMeta,
  UserEditResponseBody,
  UserEditPendingAction,
  UserEditRejectedAction,
  UserEditFulfilledAction
>({
  request: UserEditRequest,
  pending: UserEditPendingAction,
  rejected: UserEditRejectedAction,
  fulfilled: UserEditFulfilledAction,
});

export const load = ApiQuerier<
  UserLoadRequestMeta,
  UserLoadResponseBody,
  UserLoadPendingAction,
  UserLoadRejectedAction,
  UserLoadFulfilledAction
>({
  format: formatAsUserLoadResponseBody.copy({strict: true}),
  request: UserLoadRequest,
  pending: UserLoadPendingAction,
  rejected: UserLoadRejectedAction,
  fulfilled: UserLoadFulfilledAction,
});

export const create = ApiMutator<
  UserCreateRequestMeta,
  UserCreateResponseBody,
  UserCreatePendingAction,
  UserCreateRejectedAction,
  UserCreateFulfilledAction,
  UserCreateRequestMeta
>({
  request: UserCreateRequest,
  pending: UserCreatePendingAction,
  rejected: UserCreateRejectedAction,
  fulfilled: UserCreateFulfilledAction,
});

export const destroy = ApiMutator<
  UserDestroyRequestMeta,
  UserDestroyResponseBody,
  UserDestroyPendingAction,
  UserDestroyRejectedAction,
  UserDestroyFulfilledAction,
  UserDestroyRequestMeta
>({
  request: UserDestroyRequest,
  pending: UserDestroyPendingAction,
  rejected: UserDestroyRejectedAction,
  fulfilled: UserDestroyFulfilledAction,
});


export default Object.freeze({
  formatAsUserEditRequestMeta,
  formatAsUserCreateRequestMeta,
  UserLoadRequest,
  UserEditRequest,
  UserCreateRequest,
  UserDestroyRequest,
  formatAsUserLoadResponseBody,
  LOAD_PENDING,
  LOAD_REJECTED,
  LOAD_FULFILLED,
  EDIT_PENDING,
  EDIT_REJECTED,
  EDIT_FULFILLED,
  CREATE_PENDING,
  CREATE_REJECTED,
  CREATE_FULFILLED,
  DESTROY_PENDING,
  DESTROY_REJECTED,
  DESTROY_FULFILLED,
  UserEditPendingAction,
  UserEditRejectedAction,
  UserEditFulfilledAction,
  UserLoadPendingAction,
  UserLoadRejectedAction,
  UserLoadFulfilledAction,
  UserCreatePendingAction,
  UserCreateRejectedAction,
  UserCreateFulfilledAction,
  UserDestroyPendingAction,
  UserDestroyRejectedAction,
  UserDestroyFulfilledAction,
  edit,
  load,
  create,
  destroy,
});