import {Oid} from "oid"
import {Checklist} from "./Model.js"
import {CheckitemProjection} from "checkitem/dist/Projection.js"


export interface ChecklistProjectionType {
  id?: Oid
  title?: Checklist["title"]
  filter?: Checklist["filter"] 
  idUser?: Oid
  idList?: Oid
  idCard?: Oid
  idBoard?: Oid
  checkitems?: CheckitemProjection[]
}


export default ChecklistProjectionType