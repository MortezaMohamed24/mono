import {Board} from "./Board.js"
import {ListProjection} from "../List/ListProjection.js"
import {CardProjection} from "../Card/CardProjection.js"
import {LabelProjection} from "../Label/LabelProjection.js"
import {ChecklistProjection} from "../Checklist/ChecklistProjection.js"
import {CheckitemProjection} from "../Checkitem/CheckitemProjection.js"


export type BoardProjection = {
  id?: undefined | Board["id"]
  title?: undefined | Board["title"]
  theme?: undefined | Board["theme"]
  lists?: undefined | ListProjection[]
  cards?: undefined | CardProjection[]
  idUser?: undefined | Board["idUser"]
  labels?: undefined | LabelProjection[]
  idLists?: undefined | Board["idLists"]
  idLabels?: undefined | Board["idLabels"]
  isStarred?: undefined | Board["isStarred"]
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
  dateCreation?: undefined | Board["dateCreation"]
  dateLastView?: undefined | Board["dateLastView"]
  dateLastActivity?: undefined | Board["dateLastActivity"]
}


export default BoardProjection