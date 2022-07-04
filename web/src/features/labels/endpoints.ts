import {ORIGIN} from "../../api/url";


export const EDIT = new URL("/api/labels/edit", ORIGIN).href;
export const CREATE = new URL("/api/labels/create", ORIGIN).href;
export const DESTROY = new URL("/api/labels/destroy", ORIGIN).href;


export default Object.freeze({
  EDIT,
  CREATE,
  DESTROY,
});
