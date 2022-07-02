import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {CHECKITEM_PROJECTOR} from "checkitem/dist/ProjectorType.js"


const CHECKLIST_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
})


export default CHECKLIST_PROJECTOR