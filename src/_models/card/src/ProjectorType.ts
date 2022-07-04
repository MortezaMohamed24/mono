import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {STRING} from "format"
import {OBJECT} from "format"
import {CHECKLIST_PROJECTOR} from "checklist/ProjectorType.js"
import {CHECKITEM_PROJECTOR} from "checkitem/ProjectorType.js"


const CARD_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  checklists: CHECKLIST_PROJECTOR.opt(undefined),
  checkitems: CHECKITEM_PROJECTOR.opt(undefined),
})


export {CARD_PROJECTOR}
export default CARD_PROJECTOR