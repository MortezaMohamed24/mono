import {User} from "./User.js"
import {ListProjection} from "../List/ListProjection.js"
import {CardProjection} from "../Card/CardProjection.js"
import {BoardProjection} from "../Board/BoardProjection.js"
import {LabelProjection} from "../Label/LabelProjection.js"
import {ChecklistProjection} from "../Checklist/ChecklistProjection.js"
import {CheckitemProjection} from "../Checkitem/CheckitemProjection.js"


export type UserProjection = {
  id?: undefined | User["id"]
  lists?: undefined | ListProjection[]
  cards?: undefined | CardProjection[]
  boards?: undefined | BoardProjection[]
  labels?: undefined | LabelProjection[]
  avatar?: undefined | User["avatar"]
  idBoards?: undefined | User["idBoards"]
  username?: undefined | User["username"]
  lastname?: undefined | User["lastname"]
  initials?: undefined | User["initials"]
  password?: undefined | User["password"]
  firstname?: undefined | User["firstname"]
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
}


export default UserProjection