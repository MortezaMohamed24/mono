import {BoardKey} from "./BoardKey.js"
import {ListProjector} from "../List/ListProjector.js"
import {CardProjector} from "../Card/CardProjector.js"
import {LabelProjector} from "../Label/LabelProjector.js"
import {ChecklistProjector} from "../Checklist/ChecklistProjector.js"
import {CheckitemProjector} from "../Checkitem/CheckitemProjector.js"


export type BoardProjector = {
  keys: BoardKey[]
  lists?: undefined | ListProjector
  cards?: undefined | CardProjector
  labels?: undefined | LabelProjector
  checklists?: undefined | ChecklistProjector
  checkitems?: undefined | CheckitemProjector
}


export default BoardProjector