import * as METHODS from "./index.js";


interface CardMethods {
  user: METHODS.user;
  list: METHODS.list;
  move: METHODS.move;
  copy: METHODS.copy;
  shift: METHODS.shift;
  label: METHODS.label;
  board: METHODS.board;
  attach: METHODS.attach;
  labels: METHODS.labels;
  unlabel: METHODS.unlabel;
  destroy: METHODS.destroy;
  project: METHODS.project;
  deattach: METHODS.deattach;
  copySelf: METHODS.copySelf;
  setLabels: METHODS.setLabels;
  checklists: METHODS.checklists;
  checkitems: METHODS.checkitems;
  copyOwnChecklists: METHODS.copyOwnChecklists;
  updateDateLastView: METHODS.updateDateLastView;
}


export default CardMethods;