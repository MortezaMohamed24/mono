import Card from "src/Card"
import {Oid} from "oid"
import {CheckitemProjection} from "checkitem/Projector.js"
import {ChecklistProjection} from "checklist/Projector.js"


export interface CardProjection {
  id?: Oid
  url?: Card["url"]
  title?: Card["title"]
  idUser?: Card["idUser"]
  idList?: Card["idList"]
  idBoard?: Card["idBoard"]
  dateDue?: Card["dateDue"]
  idLabels?: Card["idLabels"]
  dateStart?: Card["dateStart"]
  isWatched?: Card["isWatched"]
  isComplete?: Card["isComplete"]
  checklists?: ChecklistProjection[]
  checkitems?: CheckitemProjection[]
  description?: Card["description"]
  idChecklists?: Card["idChecklists"]
  dateCreation?: Card["dateCreation"]
  dateLastView?: Card["dateLastView"]
}


export default CardProjection