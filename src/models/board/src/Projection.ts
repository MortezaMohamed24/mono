import Board from "./Model.js"
import {ListProjection} from "list/dist/Projection.js"
import {CardProjection} from "card/dist/Projection.js"
import {LabelProjection} from "label/dist/Projection.js"
import {ChecklistProjection} from "checklist/dist/Projection.js"
import {CheckitemProjection} from "checkitem/dist/Projection.js"


interface BoardProjection {
  id?: Board["_id"]
  title?: Board["title"]
  theme?: Board["theme"]
  lists?: ListProjection[]
  cards?: CardProjection[]
  idUser?: Board["idUser"]
  labels?: LabelProjection[]
  idLists?: Board["idLists"]
  idLabels?: Board["idLabels"]
  isStarred?: Board["isStarred"]
  checklists?: ChecklistProjection[]
  checkitems?: CheckitemProjection[]
  dateCreation?: Board["dateCreation"]
  dateLastView?: Board["dateLastView"]
  dateLastActivity?: Board["dateLastActivity"]
}


export default BoardProjection