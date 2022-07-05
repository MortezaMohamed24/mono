import {CardProjector} from "card/dist/Projector.js"
import {ListDocumentKey} from "./DocumentKey.js"
import {ChecklistProjector} from "checklist/dist/Projector.js"
import {CheckitemProjector} from "checkitem/dist/Projector.js"


export interface ListProjector {
  keys: ListDocumentKey[]
  cards?: CardProjector
  checklists?: ChecklistProjector
  checkitems?: CheckitemProjector
}


export default ListProjector