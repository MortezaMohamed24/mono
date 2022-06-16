import {ORIGIN} from "/api/url";


export const LOAD = new URL("/api/checkitem", ORIGIN).href
export const EDIT = new URL("/api/checkitems/edit", ORIGIN).href
export const MOVE = new URL("/api/checkitems/move", ORIGIN).href
export const CREATE = new URL("/api/checkitems/create", ORIGIN).href
export const DESTROY = new URL("/api/checkitems/destroy", ORIGIN).href


export default Object.freeze({
  LOAD,
  EDIT,
  MOVE,
  CREATE,
  DESTROY,
});