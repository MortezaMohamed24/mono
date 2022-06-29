import {Oid} from "oid"
import {Checklist} from "./Model.js"
import {CheckitemProjectionType} from "checkitem"


export interface ChecklistProjectionType {
  id?: Oid
  title?: Checklist["title"]
  filter?: Checklist["filter"] 
  idUser?: Oid
  idList?: Oid
  idCard?: Oid
  idBoard?: Oid
  checkitems?: CheckitemProjectionType[]
}


export default ChecklistProjectionType