import user from "./user/index.js";
import card from "./card/index.js";
import list from "./list/index.js";
import copy from "./copy/index.js";
import shift from "./shift/index.js";
import board from "./board/index.js";
import attach from "./attach/index.js";
import destroy from "./destroy/index.js";
import project from "./project/index.js";
import deattach from "./deattach/index.js";
import copySelf from "./copySelf/index.js";
import checkitems from "./checkitems/index.js";
import copyOwnCheckitems from "./copyOwnCheckitems/index.js";


type user = typeof user;
type card = typeof card;
type list = typeof list;
type copy = typeof copy;
type shift = typeof shift;
type board = typeof board;
type attach = typeof attach;
type destroy = typeof destroy;
type project = typeof project;
type deattach = typeof deattach;
type copySelf = typeof copySelf;
type checkitems = typeof checkitems;
type copyOwnCheckitems = typeof copyOwnCheckitems;


export {
  user,
  card,
  list,
  copy,
  shift,
  board,
  attach,
  destroy,
  project,
  deattach,
  copySelf,
  checkitems,
  copyOwnCheckitems,
};


export default Object.freeze({
  user,
  card,
  list,
  copy,
  shift,
  board,
  attach,
  destroy,
  project,
  deattach,
  copySelf,
  checkitems,
  copyOwnCheckitems,
});