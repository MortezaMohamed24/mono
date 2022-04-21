import UserProjectorType from "./projectorType.js";
import {boardProjectorDefault} from "#models/board/methods/project";


const userProjectorDefault = Object.freeze({
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
} as UserProjectorType);


export default userProjectorDefault;