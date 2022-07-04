import {KEY_PATTERN} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {INVALID_TITLE} from "./errors.js"
import {INVALID_FILTER} from "./errors.js"
import CheckitemFormats from "checkitem/formats"
import {MIN_TITLE_LENGTH} from "./constants.js"
import {MAX_TITLE_LENGTH} from "./constants.js"
import {INVALID_PROJECTOR} from "./errors.js"
import {FILTER_PATTERN as FILTER_PATTERN} from "./constants.js"


export const TITLE = STRING({
  max: MAX_TITLE_LENGTH,
  min: MIN_TITLE_LENGTH,
  trim: "both",
  name: "CHECKLIST_TITLE",
  error: INVALID_TITLE,
  escape: "html",
  compact: true,
})

export const FILTER = STRING({
  trim: "both",
  case: "upper",
  name: "CHECKLIST_FILTER",
  error: INVALID_FILTER,
  pattern: FILTER_PATTERN,
})

export const PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY_PATTERN})]),
  checkitems: CheckitemFormats.PROJECTOR.copy({optional: true}),
}, {
  name: "CHECKLIST_PROJECTOR",
  error: INVALID_PROJECTOR,
})


export default Object.freeze({
  TITLE: TITLE, 
  FILTER: FILTER,
  PROJECTOR,
})