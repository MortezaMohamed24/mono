import User from "#models/user/model";
import {Or} from "#util/checker";
import {NULL} from "#util/checker";
import {STRING} from "#util/checker";
import {USERNAME} from "./constants.js";
import {PASSWORD} from "./constants.js";
import {INITIALS} from "./constants.js";
import {LASTNAME} from "./constants.js";
import {FIRSTNAME} from "./constants.js";


export const avatar = Or<User["avatar"]>([
  NULL({}), 
  STRING({})
]);

export const username = STRING<User["username"]>({
  case: "lower",
  pattern: USERNAME,
});

export const password = STRING<string>({
  pattern: PASSWORD,
});

export const initials = STRING<User["initials"]>({
  case: "upper",
  pattern: INITIALS,
});

export const lastname = STRING<User["lastname"]>({
  case: "capital",
  pattern: LASTNAME,
});

export const firstname = STRING<User["firstname"]>({
  case: "capital",
  pattern: FIRSTNAME,
});


export default Object.freeze({
  avatar,
  username, 
  password, 
  initials, 
  lastname, 
  firstname,
});