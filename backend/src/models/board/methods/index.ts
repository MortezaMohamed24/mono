import user from "./user/index.js";
import copy from "./copy/index.js";
import lists from "./lists/index.js";
import cards from "./cards/index.js";
import labels from "./labels/index.js";
import attach from "./attach/index.js";
import destroy from "./destroy/index.js";
import project from "./project/index.js";
import deattach from "./deattach/index.js";
import copySelf from "./copySelf/index.js";
import checklists from "./checklists/index.js";
import checkitems from "./checkitems/index.js";
import copyOwnLists from "./copyOwnLists/index.js";
import copyOwnLabels from "./copyOwnLabels/index.js";
import updateDateLastView from "./updateDateLastView/index.js";


type user = typeof user
type copy = typeof copy
type lists = typeof lists
type cards = typeof cards
type labels = typeof labels
type attach = typeof attach
type destroy = typeof destroy
type project = typeof project
type deattach = typeof deattach
type copySelf = typeof copySelf
type checklists = typeof checklists
type checkitems = typeof checkitems
type copyOwnLists = typeof copyOwnLists
type copyOwnLabels = typeof copyOwnLabels
type updateDateLastView = typeof updateDateLastView


export {
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
};


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