import {OBJECT} from "format"
import {STRING} from "format"
import {LABEL_PROJECTOR} from "./LabelProjectorType.js"


export const LABEL_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: LABEL_PROJECTOR,
}, {
  name: "LABEL_PROJECT_REQUEST",
  error: "LABEL: INVALID_PROJECT_REQUEST",
})


export default LABEL_PROJECT_REQUEST