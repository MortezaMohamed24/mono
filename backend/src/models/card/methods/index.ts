import user from "./user/index.js";
import list from "./list/index.js";
import move from "./move/index.js";
import copy from "./copy/index.js";
import shift from "./shift/index.js";
import label from "./label/index.js";
import board from "./board/index.js";
import attach from "./attach/index.js";
import labels from "./labels/index.js";
import unlabel from "./unlabel/index.js";
import destroy from "./destroy/index.js";
import project from "./project/index.js";
import deattach from "./deattach/index.js";
import copySelf from "./copySelf/index.js";
import setLabels from "./setLabels/index.js";
import checklists from "./checklists/index.js";
import checkitems from "./checkitems/index.js";
import copyOwnChecklists from "./copyOwnChecklists/index.js";
import updateDateLastView from "./updateDateLastView/index.js";


type user = typeof user;
type list = typeof list;
type move = typeof move;
type copy = typeof copy;
type shift = typeof shift;
type label = typeof label;
type board = typeof board;
type attach = typeof attach;
type labels = typeof labels;
type unlabel = typeof unlabel;
type destroy = typeof destroy;
type project = typeof project;
type deattach = typeof deattach;
type copySelf = typeof copySelf;
type setLabels = typeof setLabels;
type checklists = typeof checklists;
type checkitems = typeof checkitems;
type copyOwnChecklists = typeof copyOwnChecklists;
type updateDateLastView = typeof updateDateLastView;


export {
  user,
  list,
  move,
  copy,
  shift,
  label,
  board,
  attach,
  labels,
  unlabel,
  destroy,
  project,
  deattach,
  copySelf,
  setLabels,
  checklists,
  checkitems,
  copyOwnChecklists,
  updateDateLastView,
};


export default Object.freeze({
  user,
  list,
  move,
  copy,
  shift,
  label,
  board,
  attach,
  labels,
  unlabel,
  destroy,
  project,
  deattach,
  copySelf,
  setLabels,
  checklists,
  checkitems,
  copyOwnChecklists,
  updateDateLastView,
});