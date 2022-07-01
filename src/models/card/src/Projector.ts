import {CardDocumentKey} from "./DocumentKey.js"
import {CheckitemProjectorType} from "checkitem/Projector.js"
import {ChecklistProjectorType} from "checklist/Projector.js"


export interface CardProjector {
  keys: CardDocumentKey[]
  checklists?: ChecklistProjectorType
  checkitems?: CheckitemProjectorType
}


export default CardProjector