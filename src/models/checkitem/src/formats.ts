import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {BOOLEAN} from "format"
import {KEY_PATTERN} from "./constants.js"
import {INVALID_CONTENT} from "./errors.js"
import {INVALID_PROJECTOR} from "./errors.js"
import {MIN_CONTENT_LENGTH} from "./constants.js"
import {MAX_CONTENT_LENGTH} from "./constants.js"
import {INVALID_IS_COMPLETE} from "./errors.js"


export const KEY = STRING({
  trim: "both", 
  name: "CHECKITEM_KEY",
  pattern: KEY_PATTERN,
})

export const KEYS = ARRAY([
  KEY,
], {
  name: "CHECKITEM_KEYS",
})

export const CONTENT = STRING({
  min: MIN_CONTENT_LENGTH, 
  max: MAX_CONTENT_LENGTH, 
  name: "CheckitemContent",
  trim: "both", 
  error: INVALID_CONTENT,
  escape: "html", 
  compact: true,
})

export const PROJECTOR = OBJECT({
  keys: KEYS,
}, {
  name: "CHECKITEM_PROJECTOR",
  error: INVALID_PROJECTOR,
})

export const IS_COMPLETE = BOOLEAN({
  name: "CheckitemComplete",
  error: INVALID_IS_COMPLETE,
})


export default Object.freeze({
  KEY,
  KEYS,
  CONTENT, 
  PROJECTOR,
  IS_COMPLETE,
})