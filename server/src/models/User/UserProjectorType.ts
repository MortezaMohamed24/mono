import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {USER_KEY} from "./UserKeyPattern.js"
import {LIST_PROJECTOR} from "../List/ListProjectorType.js"
import {CARD_PROJECTOR} from "../Card/CardProjectorType.js"
import {BOARD_PROJECTOR} from "../Board/BoardProjectorType.js"
import {LABEL_PROJECTOR} from "../Label/LabelProjectorType.js"
import {CHECKLIST_PROJECTOR} from "../Checklist/ChecklistProjectorType.js"
import {CHECKITEM_PROJECTOR} from "../Checkitem/CheckitemProjectorType.js"


export const USER_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: USER_KEY})]),
  lists: LIST_PROJECTOR.copy({optional: true}),
  cards: CARD_PROJECTOR.copy({optional: true}),
  boards: BOARD_PROJECTOR.copy({optional: true}),
  labels: LABEL_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "USER_PROJECTOR",
  error: "USER: INVALID_PROJECTOR",
})


export default USER_PROJECTOR