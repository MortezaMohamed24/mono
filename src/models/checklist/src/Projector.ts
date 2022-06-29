import {ChecklistDocumentKey} from "./DocumentKey.js"
import {CheckitemProjectorType} from "checkitem/Projector"


export interface ChecklistProjectorType {
  keys: ChecklistDocumentKey[]
  checkitems?: CheckitemProjectorType,
}


export default ChecklistProjectorType