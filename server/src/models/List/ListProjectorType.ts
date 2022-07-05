import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {LIST_KEY} from "./ListKeyPattern.js"
import {CARD_PROJECTOR} from "../Card/CardProjectorType.js"
import {CHECKLIST_PROJECTOR} from "../Checklist/ChecklistProjectorType.js"
import {CHECKITEM_PROJECTOR} from "../Checkitem/CheckitemProjectorType.js"


export const LIST_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: LIST_KEY})]),
  cards: CARD_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "LIST_PROJECTOR",
  error: "LIST: INVALID_PROJECTOR",
})


export default LIST_PROJECTOR