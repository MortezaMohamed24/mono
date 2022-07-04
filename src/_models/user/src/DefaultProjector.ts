import {UserProjector} from "./Projector.js"
import {DEFAULT_BOARD_PROJECTOR} from "board/dist/DefaultProjector.js"


export const DEFAULT_USER_PROJECTOR = Object.freeze<UserProjector>({
  keys: [
    "id",
    "avatar",
    "idBoards",
    "username",
    "lastname",
    "initials",
    "password",
    "firstname",
  ],

  boards: DEFAULT_BOARD_PROJECTOR,
})


export default DEFAULT_USER_PROJECTOR