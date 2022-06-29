import * as METHODS from "./methods/index.js"


export interface UserMethods {
  cards: METHODS.cards
  lists: METHODS.lists
  boards: METHODS.boards
  labels: METHODS.labels
  destroy: METHODS.destroy
  project: METHODS.project
  checklists: METHODS.checklists
  checkitems: METHODS.checkitems
  isPassword: METHODS.isPassword
  setPassword: METHODS.setPassword
  setUsername: METHODS.setUsername
  getUsername: METHODS.getUsername
}


export default UserMethods