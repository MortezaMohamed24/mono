import * as METHODS from "./methods/index.js"


export interface BoardMethods {
  user: METHODS.user
  copy: METHODS.copy
  lists: METHODS.lists
  cards: METHODS.cards
  labels: METHODS.labels
  attach: METHODS.attach
  destroy: METHODS.destroy
  project: METHODS.project
  deattach: METHODS.deattach
  copySelf: METHODS.copySelf
  checklists: METHODS.checklists
  checkitems: METHODS.checkitems
  copyOwnLists: METHODS.copyOwnLists
  copyOwnLabels: METHODS.copyOwnLabels
  updateDateLastView: METHODS.updateDateLastView
}


export default BoardMethods