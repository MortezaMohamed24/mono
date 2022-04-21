import {origin} from "/api/url";


export const LOAD = new URL("/api/checklist", origin).href;
export const EDIT = new URL("/api/checklists/edit", origin).href;
export const CREATE = new URL("/api/checklists/create", origin).href;
export const DESTROY = new URL("/api/checklists/destroy", origin).href;


export default Object.freeze({
  LOAD,
  EDIT,
  CREATE,
  DESTROY,
});