import user from "./user.js"
import list from "./list.js"
import move from "./move.js"
import copy from "./copy.js"
import shift from "./shift.js"
import label from "./label.js"
import board from "./board.js"
import attach from "./attach.js"
import labels from "./labels.js"
import unlabel from "./unlabel.js"
import destroy from "./destroy.js"
import project from "./project.js"
import deattach from "./deattach.js"
import copySelf from "./copySelf.js"
import setLabels from "./setLabels.js"
import checklists from "./checklists.js"
import checkitems from "./checkitems.js"
import copyOwnChecklists from "./copyOwnChecklists.js"
import updateDateLastView from "./updateDateLastView.js"


export type user = typeof user
export type list = typeof list
export type move = typeof move
export type copy = typeof copy
export type shift = typeof shift
export type label = typeof label
export type board = typeof board
export type attach = typeof attach
export type labels = typeof labels
export type unlabel = typeof unlabel
export type destroy = typeof destroy
export type project = typeof project
export type deattach = typeof deattach
export type copySelf = typeof copySelf
export type setLabels = typeof setLabels
export type checklists = typeof checklists
export type checkitems = typeof checkitems
export type copyOwnChecklists = typeof copyOwnChecklists
export type updateDateLastView = typeof updateDateLastView


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
})