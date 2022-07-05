import {OBJECT} from "format"
import {STRING} from "format"
import {LIST_PROJECTOR} from "./ListProjectorType.js"


export const LIST_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: LIST_PROJECTOR,
}, {
  name: "LIST_PROJECT_REQUEST",
  error: "LIST: INVALID_PROJECT_REQUEST",
})


export default LIST_PROJECT_REQUEST