import user from "./user/index.js";
import list from "./list/index.js";
import card from "./card/index.js";
import copy from "./copy/index.js";
import move from "./move/index.js";
import shift from "./shift/index.js";
import board from "./board/index.js";
import attach from "./attach/index.js";
import destroy from "./destroy/index.js";
import project from "./project/index.js";
import deattach from "./deattach/index.js";
import checklist from "./checklist/index.js";


type user = typeof user;
type list = typeof list;
type card = typeof card;
type copy = typeof copy;
type move = typeof move;
type shift = typeof shift;
type board = typeof board;
type attach = typeof attach;
type destroy = typeof destroy;
type project = typeof project;
type deattach = typeof deattach;
type checklist = typeof checklist;


export {
  user,
  list,
  card,
  copy,
  move,
  shift,
  board,
  attach,
  destroy,
  project,
  deattach,
  checklist,
};


export default Object.freeze({
  user,
  list,
  card,
  copy,
  move,
  shift,
  board,
  attach,
  destroy,
  project,
  deattach,
  checklist,
})