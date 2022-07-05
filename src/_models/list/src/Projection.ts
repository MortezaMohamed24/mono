import {List} from "./Model.js"
import {CardProjection} from "card/dist/Projector.js"
import {ChecklistProjection} from "checklist/dist/Projector.js"
import {CheckitemProjection} from "checkitem/dist/Projector.js"


export interface ListProjection {
  id?: List["id"]
  title?: List["title"]
  cards?: CardProjection[]
  idUser?: List["idUser"]
  idCards?: List["idCards"]
  idBoard?: List["idBoard"]
  isWatched?: List["isWatched"]
  sortMethod?: List["sortMethod"]
  checklists?: ChecklistProjection[]
  checkitems?: CheckitemProjection[]
}


export default ListProjection