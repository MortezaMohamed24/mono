import {ORIGIN} from "../../api/url";


export const LOAD = new URL("/api/checklist", ORIGIN).href;
export const EDIT = new URL("/api/checklists/edit", ORIGIN).href;
export const CREATE = new URL("/api/checklists/create", ORIGIN).href;
export const DESTROY = new URL("/api/checklists/destroy", ORIGIN).href;


export default Object.freeze({
  LOAD,
  EDIT,
  CREATE,
  DESTROY,
});