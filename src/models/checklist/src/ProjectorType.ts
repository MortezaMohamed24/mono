import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {CHECKITEM} from "checkitem/dist/ProjectorType.js"


const CHECKLIST = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  checkitems: checkitemProjectorCheckable,
})


export default CHECKLIST