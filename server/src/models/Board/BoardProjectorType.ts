import {ARRAY} from "format"
import {STRING} from "format"
import {OBJECT} from "format"
import {BOARD_KEY} from "./BoardKeyPattern.js"
import {LIST_PROJECTOR} from "../List/ListProjectorType.js"
import {CARD_PROJECTOR} from "../Card/CardProjectorType.js"
import {LABEL_PROJECTOR} from "../Label/LabelProjectorType.js"
import {CHECKLIST_PROJECTOR} from "../Checklist/ChecklistProjectorType.js"
import {CHECKITEM_PROJECTOR} from "../Checkitem/CheckitemProjectorType.js"


export const BOARD_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: BOARD_KEY})]),
  lists: LIST_PROJECTOR.copy({optional: true}),
  cards: CARD_PROJECTOR.copy({optional: true}),
  labels: LABEL_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
})


export default BOARD_PROJECTOR