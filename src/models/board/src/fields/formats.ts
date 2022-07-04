import {THEME} from "../constants.js"
import {STRING} from "format"
import {BOOLEAN} from "format"
import {INVALID_TITLE} from "../errors.js"
import {INVALID_THEME} from "../errors.js"
import {MIN_TITLE_LENGTH} from "../constants.js"
import {MAX_TITLE_LENGTH} from "../constants.js"
import {INVALID_IS_STARRED} from "../errors.js"


export const title = STRING({
  min: MIN_TITLE_LENGTH,
  max: MAX_TITLE_LENGTH,
  name: "BOARD_TITLE",
  trim: "both",
  escape: "html",
  compact: true,
  violation: INVALID_TITLE,
})

export const theme = STRING({
  case: "lower",
  name: "BOARD_THEME",
  trim: "both",
  pattern: THEME,
  violation: INVALID_THEME,
})

export const isStarred = BOOLEAN({
  name: "BOARD_IS_STARRED",
  violation: INVALID_IS_STARRED,
})


export default Object.freeze({
  title, 
  theme, 
  isStarred,
})