import {OBJECT} from "format"
import {STRING} from "format"
import {CHECKLIST_PROJECTOR} from "./ChecklistProjectorType.js"


export const CHECKLIST_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: CHECKLIST_PROJECTOR,
}, {
  name: "CHECKLIST_PROJECT_REQUEST",
  error: "CHECKLIST: INVALID_PROJECT_REQUEST",
})


export default CHECKLIST_PROJECT_REQUEST