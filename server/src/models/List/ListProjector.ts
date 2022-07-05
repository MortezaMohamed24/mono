import {ListKey} from "./ListKey.js"
import {CardProjector} from "../Card/CardProjector.js"
import {ChecklistProjector} from "../Checklist/ChecklistProjector.js"
import {CheckitemProjector} from "../Checkitem/CheckitemProjector.js"


export type ListProjector = {
  keys: ListKey[]
  cards?: CardProjector
  checklists?: ChecklistProjector
  checkitems?: CheckitemProjector
}


export default ListProjector