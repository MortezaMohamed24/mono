import {CheckitemProjector} from "checkitem/dist/Projector.js"
import {ChecklistDocumentKey} from "./DocumentKey.js"


export interface ChecklistProjector {
  keys: ChecklistDocumentKey[]
  checkitems?: CheckitemProjector
}


export default ChecklistProjector