import {ORIGIN} from "../../api/url";


export const EDIT = new URL("api/cards/edit", ORIGIN).href;
export const MOVE = new URL("api/cards/move", ORIGIN).href;
export const COPY = new URL("api/cards/copy", ORIGIN).href;
export const LABEL = new URL("api/cards/label", ORIGIN).href;
export const UNLABE = new URL("api/cards/unlabel", ORIGIN).href;
export const CREATE = new URL("api/cards/create", ORIGIN).href;
export const DESTROY = new URL("api/cards/destroy", ORIGIN).href;
export const SET_LABELS = new URL("api/cards/setLabels", ORIGIN).href;


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