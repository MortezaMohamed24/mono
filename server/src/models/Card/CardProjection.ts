import {Card} from "./Card.js"
import {ChecklistProjection} from "../Checklist/ChecklistProjection.js"
import {CheckitemProjection} from "../Checkitem/CheckitemProjection.js"


export interface CardProjection {
  id?: undefined | Card["id"]
  title?: undefined | Card["title"]
  idUser?: undefined | Card["idUser"]
  idList?: undefined | Card["idList"]
  idBoard?: undefined | Card["idBoard"]
  dateDue?: undefined | Card["dateDue"]
  idLabels?: undefined | Card["idLabels"]
  dateStart?: undefined | Card["dateStart"]
  isWatched?: undefined | Card["isWatched"]
  isComplete?: undefined | Card["isComplete"]
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
  description?: undefined | Card["description"]
  idChecklists?: undefined | Card["idChecklists"]
  dateCreation?: undefined | Card["dateCreation"]
  dateLastView?: undefined | Card["dateLastView"]
}


export default CardProjection