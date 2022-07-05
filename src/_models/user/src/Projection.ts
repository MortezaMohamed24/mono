import {User} from "./Model.js"
import {ListProjection} from "list/dist/Projector.js"
import {CardProjection} from "card/dist/Projector.js"
import {BoardProjection} from "board/dist/Projector.js"
import {LabelProjection} from "label/dist/Projector.js"
import {ChecklistProjection} from "checklist/dist/Projector.js"
import {CheckitemProjection} from "checkitem/dist/Projector.js"


export interface UserProjection {
  id?: User["id"]
  lists?: ListProjection[]
  cards?: CardProjection[]
  boards?: BoardProjection[]
  labels?: LabelProjection[]
  avatar?: User["avatar"]
  idBoards?: User["idBoards"]
  username?: User["username"]
  lastname?: User["lastname"]
  initials?: User["initials"]
  firstname?: User["firstname"]
  checklists?: ChecklistProjection[]
  checkitems?: CheckitemProjection[]
}


export default UserProjection