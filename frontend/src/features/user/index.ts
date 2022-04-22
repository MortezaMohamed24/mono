import "./state";
import thunks from "/features/user/actions";
import selectors from "/features/user/selectors";


export const edit = thunks.edit;
export const load = thunks.load;
export const create = thunks.create;
export const destroy = thunks.destroy;

export const id = selectors.id;
export const user = selectors.user;
export const avatar = selectors.avatar;
export const $error = selectors.$error;
export const $status = selectors.$status;
export const lastname = selectors.lastname;
export const initials = selectors.initials;
export const username = selectors.username;
export const firstname = selectors.firstname;


export default Object.freeze({
  edit,
  load,
  create,
  destroy,
  id,
  user,
  avatar,
  $error,
  $status,
  lastname,
  initials,
  username,
  firstname,
})