import {OBJECT} from "format"
import {STRING} from "format"
import {CHECKITEM_PROJECTOR} from "./CheckitemProjectorType.js"


export const CHECKITEM_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: CHECKITEM_PROJECTOR,
}, {
  name: "CHECKITEM_PROJECT_REQUEST",
  error: "CHECKITEM: INVALID_PROJECT_REQUEST",
})


export default CHECKITEM_PROJECT_REQUEST