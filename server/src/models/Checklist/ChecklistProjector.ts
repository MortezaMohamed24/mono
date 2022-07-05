import {ChecklistKey} from "./ChecklistKey.js"
import {CheckitemProjector} from "../Checkitem/CheckitemProjector.js"


export type ChecklistProjector = {
  keys: ChecklistKey[]
  checkitems?: CheckitemProjector
}


export default ChecklistProjector