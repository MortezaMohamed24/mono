import {OBJECT} from "format"
import {STRING} from "format"
import {USER_PROJECTOR} from "./UserProjectorType.js"


export const USER_PROJECT_REQUEST = OBJECT({
  projector: USER_PROJECTOR,
}, {
  name: "USER_PROJECT_REQUEST",
  error: "USER: INVALID_PROJECT_REQUEST",
})


export default USER_PROJECT_REQUEST