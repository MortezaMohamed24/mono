import {ORIGIN} from "/api/url";
import PROJECTOR from "./projector";


export const LOAD = new URL(`/api/users/project?${JSON.stringify({projector: PROJECTOR.projector})}`, ORIGIN).href;
export const EDIT = new URL("/api/users/edit", ORIGIN).href;
export const CREATE = new URL("/api/users/create", ORIGIN).href;
export const DESTROY = new URL("/api/users/delete", ORIGIN).href;


export default Object.freeze({
  LOAD,
  EDIT,
  CREATE,
  DESTROY,
});