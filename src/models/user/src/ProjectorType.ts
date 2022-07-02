import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {LIST_PROJECTOR} from "list/dist/ProjectorType.js"
import {CARD_PROJECTOR} from "card/dist/ProjectorType.js"
import {BOARD_PROJECTOR} from "board/dist/ProjectorType.js"
import {LABEL_PROJECTOR} from "label/dist/ProjectorType.js"
import {INVALID_PROJECTOR} from "./errors.js"
import {CHECKLIST_PROJECTOR} from "checklist/dist/ProjectorType.js"
import {CHECKITEM_PROJECTOR} from "checkitem/dist/ProjectorType.js"


export const USER_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  lists: LIST_PROJECTOR.copy({optional: true}),
  cards: CARD_PROJECTOR.copy({optional: true}),
  boards: BOARD_PROJECTOR.copy({optional: true}),
  labels: LABEL_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "USER_PROJECTOR",
  error: INVALID_PROJECTOR,
})


export default USER_PROJECTOR