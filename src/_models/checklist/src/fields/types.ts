import {STRING} from "format"
import {FILTER} from "../constants.js"
import {INVALID_TITLE} from "../errors.js"
import {INVALID_FILTER} from "../errors.js"
import {MIN_TITLE_LENGTH} from "../constants.js"
import {MAX_TITLE_LENGTH} from "../constants.js"


export const title = STRING({
  max: MAX_TITLE_LENGTH,
  min: MIN_TITLE_LENGTH,
  trim: "both",
  name: "CHECKLIST_TITLE",
  error: INVALID_TITLE,
  escape: "html",
  compact: true,
})

export const filter = STRING({
  trim: "both",
  case: "upper",
  name: "CHECKLIST_FILTER",
  error: INVALID_FILTER,
  pattern: FILTER,
})


export default Object.freeze({
  title, 
  filter,
})