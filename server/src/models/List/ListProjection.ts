import {List} from "./List.js"
import {CardProjection} from "../Card/CardProjection.js"
import {ChecklistProjection} from "../Checklist/ChecklistProjection.js"
import {CheckitemProjection} from "../Checkitem/CheckitemProjection.js"


export type ListProjection = {
  id?: undefined | List["id"]
  title?: undefined | List["title"]
  cards?: undefined | CardProjection[]
  idUser?: undefined | List["idUser"]
  idCards?: undefined | List["idCards"]
  idBoard?: undefined | List["idBoard"]
  isWatched?: undefined | List["isWatched"]
  sortMethod?: undefined | List["sortMethod"]
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
}


export default ListProjection