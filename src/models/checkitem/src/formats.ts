import {KEY} from "src/models/checkitem/fields/constants"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"


export const PROJECTOR = OBJECT({
  keys: ARRAY([
    STRING({
      trim: "both", 
      pattern: KEY,
      
    }),
  ]),
})


export default PROJECTOR