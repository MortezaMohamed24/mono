import {STRING} from "format"
import {OBJECT} from "format"
import {CARD_PROJECTOR} from "./CardProjectorType.js"


export const CARD_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: CARD_PROJECTOR,
}, {
  name: "CARD_PROJECT_REQUEST",
  error: "CARD: INVALID_PROJECT_REQUEST",
})


export default CARD_PROJECT_REQUEST