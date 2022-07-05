import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {CHECKITEM_KEY} from "./CheckitemKeyPattern.js"


export const CHECKITEM_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({
    trim: "both", 
    pattern: CHECKITEM_KEY,
  })]),
}, {
  name: "CHECKITEM_PROJECTOR",
  error: "CHECKITEM: INVALID_PROJECTOR",
})


export default CHECKITEM_PROJECTOR