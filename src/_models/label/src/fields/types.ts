import {OR} from "format"
import {NULL} from "format"
import {COLOR} from "../constants.js"
import {STRING} from "format"
import {INVALID_NAME} from "../errors.js"
import {INVALID_COLOR} from "../errors.js"
import {MAX_NAME_LENGTH} from "../constants.js"
import {MIN_NAME_LENGTH} from "../constants.js"


export const name = OR([
  NULL(),
  STRING({
    min: MIN_NAME_LENGTH,
    max: MAX_NAME_LENGTH,
    name: "LABEL_NAME",
    trim: "both",
    escape: "html",
    compact: true,
    violation: INVALID_NAME,
  }),
])

export const color = STRING({
  case: "lower",
  trim: "both",
  name: "LABEL_COLOR",
  pattern: COLOR,
  violation: INVALID_COLOR,
})


export default Object.freeze({
  name, 
  color,
})