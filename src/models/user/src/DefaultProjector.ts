import {UserProjectorType} from "./Projector.js"
import {boardProjectorDefault} from "board/DefaultProjector.js"


export const userProjectorDefault = Object.freeze<UserProjectorType>({
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

  boards: boardProjectorDefault,
})


export default userProjectorDefault