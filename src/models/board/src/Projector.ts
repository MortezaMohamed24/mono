import Key from "./DocumentKey.js"
import {ListProjector} from "list/Projector.js"
import {CardProjector} from "card/Projector.js"
import {LabelProjector} from "label/Projector.js"
import {ChecklistProjector} from "checklist/Projector.js"
import {CheckitemProjector} from "checkitem/Projector.js"


export interface BoardProjector {
  keys: Key[]
  lists?: ListProjector
  cards?: CardProjector
  labels?: LabelProjector
  checklists?: ChecklistProjector
  checkitems?: CheckitemProjector
}


export default BoardProjector