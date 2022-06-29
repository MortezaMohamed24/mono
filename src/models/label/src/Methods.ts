import * as METHODS from "./methods/index.js"


export interface LabelMethods {
  user: METHODS.user
  copy: METHODS.copy
  board: METHODS.board
  attach: METHODS.attach
  destroy: METHODS.destroy
  project: METHODS.project
  deattach: METHODS.deattach
}


export default LabelMethods