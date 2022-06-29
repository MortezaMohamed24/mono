import user from "./user/index.js";
import copy from "./copy/index.js";
import board from "./board/index.js";
import attach from "./attach/index.js";
import destroy from "./destroy/index.js";
import project from "./project/index.js";
import deattach from "./deattach/index.js";


type user = typeof user;
type copy = typeof copy;
type board = typeof board;
type attach = typeof attach;
type destroy = typeof destroy;
type project = typeof project;
type deattach = typeof deattach;


export {
  user,
  copy,
  board,
  attach,
  destroy,
  project,
  deattach,
};


export default Object.freeze({
  user,
  copy,
  board,
  attach,
  destroy,
  project,
  deattach,
});