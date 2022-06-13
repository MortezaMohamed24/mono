import cards from "./cards/index.js";
import lists from "./lists/index.js";
import boards from "./boards/index.js";
import labels from "./labels/index.js";
import destroy from "./destroy/index.js";
import project from "./project/index.js";
import checklists from "./checklists/index.js";
import checkitems from "./checkitems/index.js";
import isPassword from "./isPassword/index.js";
import setPassword from "./setPassword/index.js";
import setUsername from "./setUsername/index.js";
import getUsername from "./getUsername/index.js";


type cards = typeof cards;
type lists = typeof lists;
type boards = typeof boards;
type labels = typeof labels;
type destroy = typeof destroy;
type project = typeof project;
type checklists = typeof checklists;
type checkitems = typeof checkitems;
type isPassword = typeof isPassword;
type setPassword = typeof setPassword;
type setUsername = typeof setUsername;
type getUsername = typeof getUsername;


export {
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
};


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
});