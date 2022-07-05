import {CardKey} from "./CardKey.js"
import {CheckitemProjector} from "../Checkitem/CheckitemProjector.js"
import {ChecklistProjector} from "../Checklist/ChecklistProjector.js"


export interface CardProjector {
  keys: CardKey[]
  checklists?: undefined | ChecklistProjector
  checkitems?: undefined | CheckitemProjector
}


export default CardProjector