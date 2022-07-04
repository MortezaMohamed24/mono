import {ListProjector} from "list/dist/Projector.js"
import {CardProjector} from "card/dist/Projector.js"
import {BoardProjector} from "board/dist/Projector.js"
import {LabelProjector} from "label/dist/Projector.js"
import {UserDocumentKey} from "./DocumentKey.js"
import {ChecklistProjector} from "checklist/dist/Projector.js"
import {CheckitemProjector} from "checkitem/dist/Projector.js"


export interface UserProjector {
  keys: UserDocumentKey[]
  lists?: ListProjector
  cards?: CardProjector
  boards?: BoardProjector
  labels?: LabelProjector
  checklists?: ChecklistProjector
  checkitems?: CheckitemProjector
}


export default UserProjector