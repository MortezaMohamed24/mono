import {origin} from "/api/url";


export const MOVE = new URL("/api/lists/move", origin).href;
export const SORT = new URL("/api/lists/sort", origin).href;
export const COPY = new URL("/api/lists/copy", origin).href;
export const EDIT = new URL("/api/lists/edit", origin).href;
export const CREATE = new URL("/api/lists/create", origin).href;
export const DESTROY = new URL("/api/lists/destroy", origin).href;
export const OWN_CARDS_MOVED = new URL("/api/lists/moveAllOwnCards", origin).href;
export const DESTROY_OWN_CARDS = new URL("/api/lists/destroyAllOwnCards", origin).href;


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