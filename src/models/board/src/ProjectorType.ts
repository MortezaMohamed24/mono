import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {LIST_PROJECTOR} from "list/Projector.js"
import {CARD_PROJECTOR} from "card/Projector.js"
import {LABEL_PROJECTOR} from "label/Projector.js"
import {CHECKLIST_PROJECTOR} from "checklist/Projector.js"
import {CHECKITEM_PROJECTOR} from "checkitem/Projector.js"


export const BOARD_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  lists: LIST_PROJECTOR.copy({optional: true}),
  cards: CARD_PROJECTOR.copy({optional: true}),
  labels: LABEL_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
})


export default BOARD_PROJECTOR