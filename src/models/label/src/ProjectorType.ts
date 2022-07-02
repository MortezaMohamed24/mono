import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {INVALID_PROJECTOR} from "./errors.js"


const PROJECTOR = OBJECT({
  keys: ARRAY([
    STRING({trim: "both", pattern: KEY}),
  ]),
}, {
  name: "LABEL_PROJECTOR",
  error: INVALID_PROJECTOR,
})


export default PROJECTOR