import {STRING} from "format"
import {BOOLEAN} from "format"
import {MIN_CONTENT_LENGTH} from "../constants.js"
import {MAX_CONTENT_LENGTH} from "../constants.js"


export const content = STRING({
  min: MIN_CONTENT_LENGTH, 
  max: MAX_CONTENT_LENGTH, 
  name: "CheckitemContent",
  trim: "both", 
  escape: "html", 
  compact: true,
})

export const isComplete = BOOLEAN({
  name: "CheckitemComplete"
})


export default Object.freeze({
  content, 
  isComplete,
})