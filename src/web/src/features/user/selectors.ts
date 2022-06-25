import {State} from "/store";


export const id = ({ur}: State) => ur.$status === "succeeded" ? ur.id : undefined;
export const user = ({ur}: State) => ur;
export const avatar = ({ur}: State) => ur.$status === "succeeded" ? ur.avatar : undefined;
export const $error = ({ur}: State) => ur.$error;
export const $status = ({ur}: State) => ur.$status;
export const lastname = ({ur}: State) => ur.$status === "succeeded" ? ur.lastname : undefined;
export const initials = ({ur}: State) => ur.$status === "succeeded" ? ur.initials : undefined;
export const username = ({ur}: State) => ur.$status === "succeeded" ? ur.username : undefined;
export const firstname = ({ur}: State) => ur.$status === "succeeded" ? ur.firstname : undefined;


export default Object.freeze({
  id,
  user,
  avatar,
  $error,
  $status,
  lastname,
  initials,
  username,
  firstname,
});