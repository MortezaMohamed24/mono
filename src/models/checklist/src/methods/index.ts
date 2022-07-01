import user from "./user.js"
import card from "./card.js"
import list from "./list.js"
import copy from "./copy.js"
import shift from "./shift.js"
import board from "./board.js"
import attach from "./attach.js"
import destroy from "./destroy.js"
import project from "./project.js"
import deattach from "./deattach.js"
import copySelf from "./copySelf.js"
import checkitems from "./checkitems.js"
import copyOwnCheckitems from "./copyOwnCheckitems.js"


export type user = typeof user
export type card = typeof card
export type list = typeof list
export type copy = typeof copy
export type shift = typeof shift
export type board = typeof board
export type attach = typeof attach
export type destroy = typeof destroy
export type project = typeof project
export type deattach = typeof deattach
export type copySelf = typeof copySelf
export type checkitems = typeof checkitems
export type copyOwnCheckitems = typeof copyOwnCheckitems


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
})