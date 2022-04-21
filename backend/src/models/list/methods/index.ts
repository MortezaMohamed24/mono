import user from "./user/index.js";
import move from "./move/index.js";
import copy from "./copy/index.js";
import sort from "./sort/index.js";
import shift from "./shift/index.js";
import board from "./board/index.js";
import cards from "./cards/index.js";
import attach from "./attach/index.js";
import destroy from "./destroy/index.js";
import project from "./project/index.js";
import copySelf from "./copySelf/index.js";
import deattach from "./deattach/index.js";
import checklists from "./checklists/index.js";
import checkitems from "./checkitems/index.js";
import copyAllOwnCards from "./copyAllOwnCards/index.js";
import moveAllOwnCards from "./moveAllOwnCards/index.js";
import destroyAllOwnCards from "./destroyAllOwnCards/index.js";


type user = typeof user;
type move = typeof move;
type copy = typeof copy;
type sort = typeof sort;
type shift = typeof shift;
type board = typeof board;
type cards = typeof cards;
type attach = typeof attach;
type destroy = typeof destroy;
type project = typeof project;
type copySelf = typeof copySelf;
type deattach = typeof deattach;
type checklists = typeof checklists;
type checkitems = typeof checkitems;
type copyAllOwnCards = typeof copyAllOwnCards;
type moveAllOwnCards = typeof moveAllOwnCards;
type destroyAllOwnCards = typeof destroyAllOwnCards;


export {
  user,
  move,
  copy,
  sort,
  shift,
  board,
  cards,
  attach,
  destroy,
  project,
  copySelf,
  deattach,
  checklists,
  checkitems,
  copyAllOwnCards,
  moveAllOwnCards,
  destroyAllOwnCards,
};


export default Object.freeze({
  user,
  move,
  copy,
  sort,
  shift,
  board,
  cards,
  attach,
  destroy,
  project,
  copySelf,
  deattach,
  checklists,
  checkitems,
  copyAllOwnCards,
  moveAllOwnCards,
  destroyAllOwnCards,
});