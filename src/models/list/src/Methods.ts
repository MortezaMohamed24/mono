import * as METHODS from "./methods/index.js"


export type ListMethods = {
  user: METHODS.user
  move: METHODS.move
  copy: METHODS.copy
  sort: METHODS.sort
  shift: METHODS.shift
  board: METHODS.board
  cards: METHODS.cards
  attach: METHODS.attach
  destroy: METHODS.destroy
  project: METHODS.project
  copySelf: METHODS.copySelf
  deattach: METHODS.deattach
  checklists: METHODS.checklists
  checkitems: METHODS.checkitems
  copyAllOwnCards: METHODS.copyAllOwnCards
  moveAllOwnCards: METHODS.moveAllOwnCards
  destroyAllOwnCards: METHODS.destroyAllOwnCards
}


export default ListMethods