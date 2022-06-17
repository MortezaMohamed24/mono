import user from "./user.js"
import list from "./list.js"
import card from "./card.js"
import copy from "./copy.js"
import move from "./move.js"
import shift from "./shift.js"
import board from "./board.js"
import attach from "./attach.js"
import destroy from "./destroy.js"
import project from "./project.js"
import deattach from "./deattach.js"
import checklist from "./checklist.js"


type user = typeof user
type list = typeof list
type card = typeof card
type copy = typeof copy
type move = typeof move
type shift = typeof shift
type board = typeof board
type attach = typeof attach
type destroy = typeof destroy
type project = typeof project
type deattach = typeof deattach
type checklist = typeof checklist


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
}


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