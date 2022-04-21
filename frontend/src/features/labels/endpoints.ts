import {origin} from "/api/url";


export const EDIT = new URL("/api/labels/edit", origin).href;
export const CREATE = new URL("/api/labels/create", origin).href;
export const DESTROY = new URL("/api/labels/destroy", origin).href;


export default Object.freeze({
  EDIT,
  CREATE,
  DESTROY,
});
