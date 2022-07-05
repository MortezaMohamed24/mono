import {ARRAY} from "format"
import {STRING} from "format"
import {OBJECT} from "format"
import {CARD_KEY} from "./CardKeyPattern.js"
import {CHECKLIST_PROJECTOR} from "../Checklist/ChecklistProjectorType.js"
import {CHECKITEM_PROJECTOR} from "../Checkitem/CheckitemProjectorType.js"


export const CARD_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: CARD_KEY})]),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "CARD_PROJECTOR",
  error: "CARD: INVALID_PROJECTOR",
})


export default CARD_PROJECTOR