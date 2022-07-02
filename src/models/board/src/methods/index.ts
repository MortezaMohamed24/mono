import user from "./user.js"
import copy from "./copy.js"
import lists from "./lists.js"
import cards from "./cards.js"
import labels from "./labels.js"
import attach from "./attach.js"
import destroy from "./destroy.js"
import project from "./project.js"
import deattach from "./deattach.js"
import copySelf from "./copySelf.js"
import checklists from "./checklists.js"
import checkitems from "./checkitems.js"
import copyOwnLists from "./copyOwnLists.js"
import copyOwnLabels from "./copyOwnLabels.js"
import updateDateLastView from "./updateDateLastView.js"


export type user = typeof user
export type copy = typeof copy
export type lists = typeof lists
export type cards = typeof cards
export type labels = typeof labels
export type attach = typeof attach
export type destroy = typeof destroy
export type project = typeof project
export type deattach = typeof deattach
export type copySelf = typeof copySelf
export type checklists = typeof checklists
export type checkitems = typeof checkitems
export type copyOwnLists = typeof copyOwnLists
export type copyOwnLabels = typeof copyOwnLabels
export type updateDateLastView = typeof updateDateLastView


export default Object.freeze({
  user,
  copy,
  lists,
  cards,
  labels,
  attach,
  destroy,
  project,
  deattach,
  copySelf,
  checklists,
  checkitems,
  copyOwnLists,
  copyOwnLabels,
  updateDateLastView,
});