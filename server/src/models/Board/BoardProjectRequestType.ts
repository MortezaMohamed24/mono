import {OBJECT} from "format"
import {STRING} from "format"
import {BOARD_PROJECTOR} from "./BoardProjectorType.js"


export const BOARD_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: BOARD_PROJECTOR,
}, {
  name: "BOARD_PROJECT_REQUEST",
  error: "BOARD: INVALID_PROJECT_REQUEST",
})


export default BOARD_PROJECT_REQUEST