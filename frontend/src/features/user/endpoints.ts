import {origin} from "/api/url";
import PROJECTOR from "./projector";


export const LOAD = new URL(`/api/users/project?${JSON.stringify({projector: PROJECTOR.projector})}`, origin).href;
export const EDIT = new URL("/api/users/edit", origin).href;
export const CREATE = new URL("/api/users/create", origin).href;
export const DESTROY = new URL("/api/users/delete", origin).href;


export default Object.freeze({
  LOAD,
  EDIT,
  CREATE,
  DESTROY,
});