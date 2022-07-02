import user from "./user.js"
import move from "./move.js"
import copy from "./copy.js"
import sort from "./sort.js"
import shift from "./shift.js"
import board from "./board.js"
import cards from "./cards.js"
import attach from "./attach.js"
import destroy from "./destroy.js"
import project from "./project.js"
import copySelf from "./copySelf.js"
import deattach from "./deattach.js"
import checklists from "./checklists.js"
import checkitems from "./checkitems.js"
import copyAllOwnCards from "./copyAllOwnCards.js"
import moveAllOwnCards from "./moveAllOwnCards.js"
import destroyAllOwnCards from "./destroyAllOwnCards.js"


export type user = typeof user
export type move = typeof move
export type copy = typeof copy
export type sort = typeof sort
export type shift = typeof shift
export type board = typeof board
export type cards = typeof cards
export type attach = typeof attach
export type destroy = typeof destroy
export type project = typeof project
export type copySelf = typeof copySelf
export type deattach = typeof deattach
export type checklists = typeof checklists
export type checkitems = typeof checkitems
export type copyAllOwnCards = typeof copyAllOwnCards
export type moveAllOwnCards = typeof moveAllOwnCards
export type destroyAllOwnCards = typeof destroyAllOwnCards


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
})