import cards from "./cards.js"
import lists from "./lists.js"
import boards from "./boards.js"
import labels from "./labels.js"
import destroy from "./destroy.js"
import project from "./project.js"
import checklists from "./checklists.js"
import checkitems from "./checkitems.js"
import isPassword from "./isPassword.js"
import setPassword from "./setPassword.js"
import setUsername from "./setUsername.js"
import getUsername from "./getUsername.js"


export type cards = typeof cards
export type lists = typeof lists
export type boards = typeof boards
export type labels = typeof labels
export type destroy = typeof destroy
export type project = typeof project
export type checklists = typeof checklists
export type checkitems = typeof checkitems
export type isPassword = typeof isPassword
export type setPassword = typeof setPassword
export type setUsername = typeof setUsername
export type getUsername = typeof getUsername


export default Object.freeze({
  cards,
  lists,
  boards,
  labels,
  destroy,
  project,
  checklists,
  checkitems,
  isPassword,
  setPassword,
  setUsername,
  getUsername,
})