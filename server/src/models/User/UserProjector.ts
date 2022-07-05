import {UserKey} from "./UserKey.js"
import {ListProjector} from "../List/ListProjector.js"
import {CardProjector} from "../Card/CardProjector.js"
import {BoardProjector} from "../Board/BoardProjector.js"
import {LabelProjector} from "../Label/LabelProjector.js"
import {ChecklistProjector} from "../Checklist/ChecklistProjector.js"
import {CheckitemProjector} from "../Checkitem/CheckitemProjector.js"


export type UserProjector = {
  keys: UserKey[]
  lists?: undefined | ListProjector
  cards?: undefined | CardProjector
  boards?: undefined | BoardProjector
  labels?: undefined | LabelProjector
  checklists?: undefined | ChecklistProjector
  checkitems?: undefined | CheckitemProjector
}


export default UserProjector