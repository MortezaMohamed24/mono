import {CardDocumentKey} from "src/models/card/document"
import {CheckitemProjectorType} from "src/models/checkitem/methods/project"
import {ChecklistProjectorType} from "src/models/checklist/methods/project"


export interface CardProjector {
  keys: CardDocumentKey[]
  checklists?: ChecklistProjectorType
  checkitems?: CheckitemProjectorType
}


export default CardProjector