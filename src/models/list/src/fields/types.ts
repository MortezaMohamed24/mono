import {STRING} from "format"
import {BOOLEAN} from "format"
import {SORT_METHOD} from "../constants.js"
import {INVALID_TITLE} from "../errors.js"
import {MIN_TITLE_LENGTH} from "../constants.js"
import {MAX_TITLE_LENGTH} from "../constants.js"
import {INVALID_SORT_METHOD} from "../errors.js"
import {INVALID_IS_WATCHED} from "../errors.js"


export const title = STRING({
  min: MIN_TITLE_LENGTH,
  max: MAX_TITLE_LENGTH,
  trim: "both",
  name: "LIST_TITLE",
  escape: "html",
  compact: true,
  violation: INVALID_TITLE,
})

export const isWatched = BOOLEAN({
  name: "LIST_IS_WATCHED",
  violation: INVALID_IS_WATCHED,
})

export const sortMethod = STRING({
  trim: "both",
  case: "upper",
  naem: "LIST_SORT_METHOD",
  pattern: SORT_METHOD,
  violation: INVALID_SORT_METHOD,
})


export default Object.freeze({
  title, 
  isWatched, 
  sortMethod,
})