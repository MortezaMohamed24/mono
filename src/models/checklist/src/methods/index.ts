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


type user = typeof user
type card = typeof card
type list = typeof list
type copy = typeof copy
type shift = typeof shift
type board = typeof board
type attach = typeof attach
type destroy = typeof destroy
type project = typeof project
type deattach = typeof deattach
type copySelf = typeof copySelf
type checkitems = typeof checkitems
type copyOwnCheckitems = typeof copyOwnCheckitems


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
}


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