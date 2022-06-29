import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"


const PROJECTOR = OBJECT({
  keys: ARRAY([
    STRING({trim: "both", pattern: KEY}),
  ]),
}, {
  name: "LABEL_PROJECTOR",
  // violation: INVALID_PROJECTOR,
})


export default PROJECTOR