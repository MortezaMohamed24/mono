import * as METHODS from "./methods/index.js"


export interface CheckitemMethods {
  user: METHODS.user
  list: METHODS.list
  card: METHODS.card
  copy: METHODS.copy
  move: METHODS.move
  shift: METHODS.shift
  board: METHODS.board
  attach: METHODS.attach
  destroy: METHODS.destroy
  project: METHODS.project
  deattach: METHODS.deattach
  checklist: METHODS.checklist
}


export default CheckitemMethods