import User from "#models/user";
import Error from "#util/error";
import types from "./checkables.js";
import {INVALID_AVATAR} from "#models/user/errors";
import {INVALID_USERNAME} from "#models/user/errors";
import {INVALID_PASSWORD} from "#models/user/errors";
import {INVALID_INITIALS} from "#models/user/errors";
import {INVALID_LASTNAME} from "#models/user/errors";
import {INVALID_FIRSTNAME} from "#models/user/errors";
import {GenericCheckerWithError} from "#util/checker";


export const avatar = GenericCheckerWithError<User["avatar"]>(
  types.avatar, 
  () => new Error(400, INVALID_AVATAR),
);

export const username = GenericCheckerWithError<User["username"]>(
  types.username, 
  () => new Error(400, INVALID_USERNAME),
);

export const password = GenericCheckerWithError<User["password"]>(
  types.password, 
  () => new Error(400, INVALID_PASSWORD),
);

export const initials = GenericCheckerWithError<User["initials"]>(
  types.initials, 
  () => new Error(400, INVALID_INITIALS),
);

export const lastname = GenericCheckerWithError<User["lastname"]>(
  types.lastname, 
  () => new Error(400, INVALID_LASTNAME),
);

export const firstname = GenericCheckerWithError<User["firstname"]>(
  types.firstname, 
  () => new Error(400, INVALID_FIRSTNAME),
);


export default Object.freeze({
  avatar,
  username, 
  password, 
  initials, 
  lastname, 
  firstname,
});