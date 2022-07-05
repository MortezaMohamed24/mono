import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {LABEL_KEY} from "./LabelKeyPattern.js"


export const LABEL_PROJECTOR = OBJECT({
  keys: ARRAY([
    STRING({trim: "both", pattern: LABEL_KEY}),
  ]),
}, {
  name: "LABEL_PROJECTOR",
  error: "LABEL: INVALID_PROJECTOR",
})


export default LABEL_PROJECTOR