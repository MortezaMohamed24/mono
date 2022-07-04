import {OR} from "format"
import {NULL} from "format"
import {NUMBER} from "format"
import {STRING} from "format"
import {BOOLEAN} from "format"
import {MIN_DATE} from "../constants.js"
import {MAX_DATE} from "../constants.js"
import {INVALID_TITLE} from "../errors.js"
import {MIN_TITLE_LENGTH} from "../constants.js"
import {MAX_TITLE_LENGTH} from "../constants.js"
import {INVALID_DATE_DUE} from "../errors.js"
import {INVALID_IS_WATCHED} from "../errors.js"
import {INVALID_DATE_START} from "../errors.js"
import {INVALID_IS_COMPLETE} from "../errors.js"
import {INVALID_DESCRIPTION} from "../errors.js"
import {INVALID_DATE_CREATION} from "../errors.js"
import {INVALID_DATE_LAST_VIEW} from "../errors.js"
import {MIN_DESCRIPTION_LENGTH} from "../constants.js"
import {MAX_DESCRIPTION_LENGTH} from "../constants.js"


export const title = STRING({
  max: MAX_TITLE_LENGTH,
  min: MIN_TITLE_LENGTH,
  trim: "both",
  name: "CARD_TITLE",
  escape: "html",
  compact: true,
  violation: INVALID_TITLE,
})

export const dateDue = OR([
  NULL(),
  NUMBER({max: MAX_DATE, min: MIN_DATE}),
], {
  name: "CARD_DUE_DATE",
  violation: INVALID_DATE_DUE,
})

export const dateStart = OR([
  NULL(),
  NUMBER({max: MAX_DATE, min: MIN_DATE}),
], {
  name: "CARD_START_DATE",
  violation: INVALID_DATE_DUE,
})

export const isWatched = BOOLEAN({
  name: "CARD_IS_WATCHED",
  violation: INVALID_IS_WATCHED,
})

export const isComplete = BOOLEAN({
  name: "CARD_IS_COMPLETE",
  violation: INVALID_IS_COMPLETE,
})

export const description = OR([
  NULL(),
  STRING({
    max: MAX_DESCRIPTION_LENGTH,
    min: MIN_DESCRIPTION_LENGTH,
    trim: "both",
    escape: "html",
    compact: true,
  }),
], {
  name: "CARD_DESCRIPTION",
  violation: INVALID_DESCRIPTION,
})

export const dateCreation = NUMBER({
  min: 0, 
  name: "CARD_DATE_CREATION",
  safe: true, 
  finite: true,
  violation: INVALID_DATE_CREATION,
})

export const dateLastView = NUMBER({
  min: 0, 
  name: "CARD_DATE_LAST_VIEW",
  safe: true, 
  finite: true,
  violation: INVALID_DATE_LAST_VIEW,
})


export default Object.freeze({
  title,
  dateDue,
  dateStart,
  isWatched,
  isComplete,
  description,
  dateCreation,
  dateLastView,
})