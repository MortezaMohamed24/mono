import {ORIGIN} from "/api/url";


export const MOVE = new URL("/api/lists/move", ORIGIN).href;
export const SORT = new URL("/api/lists/sort", ORIGIN).href;
export const COPY = new URL("/api/lists/copy", ORIGIN).href;
export const EDIT = new URL("/api/lists/edit", ORIGIN).href;
export const CREATE = new URL("/api/lists/create", ORIGIN).href;
export const DESTROY = new URL("/api/lists/destroy", ORIGIN).href;
export const OWN_CARDS_MOVED = new URL("/api/lists/moveAllOwnCards", ORIGIN).href;
export const DESTROY_OWN_CARDS = new URL("/api/lists/destroyAllOwnCards", ORIGIN).href;


export default Object.freeze({
  MOVE,
  SORT,
  COPY,
  EDIT,
  CREATE,
  DESTROY,
  OWN_CARDS_MOVED,
  DESTROY_OWN_CARDS,
});