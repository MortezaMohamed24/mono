import {OR} from "format"
import {NULL} from "format"
import {STRING} from "format"
import {USERNAME} from "../constants.js"
import {PASSWORD} from "../constants.js"
import {INITIALS} from "../constants.js"
import {LASTNAME} from "../constants.js"
import {FIRSTNAME} from "../constants.js"
import {INVALID_AVATAR} from "../errors.js"
import {INVALID_USERNAME} from "../errors.js"
import {INVALID_PASSWORD} from "../errors.js"
import {INVALID_INITIALS} from "../errors.js"
import {INVALID_LASTNAME} from "../errors.js"
import {INVALID_FIRSTNAME} from "../errors.js"


export const avatar = OR([
  NULL(), 
  STRING()
], {
  name: "USER_AVATAR",
  error: INVALID_AVATAR,
})

export const username = STRING({
  case: "lower",
  name: "USER_USERNAME",
  error: INVALID_USERNAME,
  pattern: USERNAME,
})

export const password = STRING({
  name: "USER_PASSWORD",
  error: INVALID_PASSWORD,
  pattern: PASSWORD,
})

export const initials = STRING({
  case: "upper",
  name: "USER_INITIALS",
  error: INVALID_INITIALS,
  pattern: INITIALS,
})

export const lastname = STRING({
  case: "capital",
  name: "USER_LASTNAME",
  error: INVALID_LASTNAME,
  pattern: LASTNAME,
})

export const firstname = STRING({
  case: "capital",
  name: "USER_FIRSTNAME",
  error: INVALID_FIRSTNAME,
  pattern: FIRSTNAME,
})


export default Object.freeze({
  avatar,
  username, 
  password, 
  initials, 
  lastname, 
  firstname,
})