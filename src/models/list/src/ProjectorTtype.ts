import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {CARD_PROJECTOR} from "card/dist/ProjectorType.js"
import {INVALID_PROJECTOR} from "./errors.js"
import {CHECKLIST_PROJECTOR} from "checklist/dist/ProjectorType.js"
import {CHECKITEM_PROJECTOR} from "checkitem/dist/ProjectorType.js"


export const LIST_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  cards: CARD_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "LIST_PROJECTOR",
  error: INVALID_PROJECTOR,
})


export default LIST_PROJECTOR