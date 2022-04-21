import * as METHODS from "./index.js";


interface ChecklistMethods {
  user: METHODS.user;
  card: METHODS.card;
  list: METHODS.list;
  copy: METHODS.copy;
  shift: METHODS.shift;
  board: METHODS.board;
  attach: METHODS.attach;
  destroy: METHODS.destroy;
  project: METHODS.project;
  deattach: METHODS.deattach;
  copySelf: METHODS.copySelf;
  checkitems: METHODS.checkitems;
  copyOwnCheckitems: METHODS.copyOwnCheckitems;
}


export default ChecklistMethods;