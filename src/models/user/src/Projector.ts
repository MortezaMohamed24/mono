import {UserDocumentKey} from "./DocumentKey.js"
import {ListProjectorType} from "list/Projector.js"
import {CardProjectorType} from "card/Projector.js"
import {BoardProjectorType} from "board/Projector.js"
import {LabelProjectorType} from "label/Projector.js"
import {ChecklistProjectorType} from "checklist/Projector.js"
import {CheckitemProjectorType} from "checkitem/Projector.js"


export interface UserProjectorType {
  keys: UserDocumentKey[]
  lists?: ListProjectorType
  cards?: CardProjectorType
  boards?: BoardProjectorType
  labels?: LabelProjectorType
  checklists?: ChecklistProjectorType
  checkitems?: CheckitemProjectorType
}


export default UserProjectorType