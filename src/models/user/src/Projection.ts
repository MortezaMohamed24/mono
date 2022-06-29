import {User} from "./Model.js"
import {ListProjectionType} from "list/Projector.js"
import {CardProjectionType} from "card/Projector.js"
import {BoardProjectionType} from "board/Projector.js"
import {LabelProjectionType} from "label/Projector.js"
import {ChecklistProjectionType} from "checklist/Projector.js"
import {CheckitemProjectionType} from "checkitem/Projector.js"


export interface UserProjectionType {
  id?: User["id"]
  lists?: ListProjectionType[]
  cards?: CardProjectionType[]
  boards?: BoardProjectionType[]
  labels?: LabelProjectionType[]
  avatar?: User["avatar"]
  idBoards?: User["idBoards"]
  username?: User["username"]
  lastname?: User["lastname"]
  initials?: User["initials"]
  firstname?: User["firstname"]
  checklists?: ChecklistProjectionType[]
  checkitems?: CheckitemProjectionType[]
}


export default UserProjectionType