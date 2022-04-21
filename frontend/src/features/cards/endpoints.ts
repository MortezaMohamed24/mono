import {origin} from "/api/url";


export const EDIT = new URL("api/cards/edit", origin).href;
export const MOVE = new URL("api/cards/move", origin).href;
export const COPY = new URL("api/cards/copy", origin).href;
export const LABEL = new URL("api/cards/label", origin).href;
export const UNLABE = new URL("api/cards/unlabel", origin).href;
export const CREATE = new URL("api/cards/create", origin).href;
export const DESTROY = new URL("api/cards/destroy", origin).href;
export const SET_LABELS = new URL("api/cards/setLabels", origin).href;


export default Object.freeze({
  EDIT,
  MOVE,
  COPY,
  LABEL,
  UNLABE,
  CREATE,
  DESTROY,
  SET_LABELS,
});