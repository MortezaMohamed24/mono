import user from "./user.js"
import copy from "./copy.js"
import board from "./board.js"
import attach from "./attach.js"
import destroy from "./destroy.js"
import project from "./project.js"
import deattach from "./deattach.js"


export type user = typeof user
export type copy = typeof copy
export type board = typeof board
export type attach = typeof attach
export type destroy = typeof destroy
export type project = typeof project
export type deattach = typeof deattach


export default Object.freeze({
  user,
  copy,
  board,
  attach,
  destroy,
  project,
  deattach,
})