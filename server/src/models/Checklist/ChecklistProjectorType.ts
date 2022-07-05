import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {CHECKLIST_KEY} from "./ChecklistKeyPattern.js"
import {CHECKITEM_PROJECTOR} from "../Checkitem/CheckitemProjectorType.js"


export const CHECKLIST_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: CHECKLIST_KEY})]),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "CHECKLIST_PROJECTOR",
  error: "CHECKLIST: INVALID_PROJECTOR",
})


export default CHECKLIST_PROJECTOR