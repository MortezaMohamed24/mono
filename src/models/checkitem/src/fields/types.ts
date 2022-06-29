import {STRING} from "format"
import {BOOLEAN} from "format"
import {INVALID_CONTENT} from "../errors.js";
import {MIN_CONTENT_LENGTH} from "../constants.js"
import {MAX_CONTENT_LENGTH} from "../constants.js"
import {INVALID_IS_COMPLETE} from "../errors.js";


export const content = STRING({
  min: MIN_CONTENT_LENGTH, 
  max: MAX_CONTENT_LENGTH, 
  name: "CheckitemContent",
  trim: "both", 
  error: INVALID_CONTENT,
  escape: "html", 
  compact: true,
})

export const isComplete = BOOLEAN({
  name: "CheckitemComplete",
  error: INVALID_IS_COMPLETE,
})


export default Object.freeze({
  content, 
  isComplete,
})