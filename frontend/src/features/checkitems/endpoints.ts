import {origin} from "/api/url";


export const LOAD = new URL("/api/checkitem", origin).href
export const EDIT = new URL("/api/checkitems/edit", origin).href
export const MOVE = new URL("/api/checkitems/move", origin).href
export const CREATE = new URL("/api/checkitems/create", origin).href
export const DESTROY = new URL("/api/checkitems/destroy", origin).href


export default Object.freeze({
  LOAD,
  EDIT,
  MOVE,
  CREATE,
  DESTROY,
});