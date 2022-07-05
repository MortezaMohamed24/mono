import {Checklist} from "./Checklist.js"
import {CheckitemProjection} from "../Checkitem/CheckitemProjection.js"


export type ChecklistProjection = {
  id?: undefined | Checklist["id"]
  title?: undefined | Checklist["title"]
  filter?: undefined | Checklist["filter"] 
  idUser?: undefined | Checklist["idUser"]
  idList?: undefined | Checklist["idList"]
  idCard?: undefined | Checklist["idCard"]
  idBoard?: undefined | Checklist["idBoard"]
  checkitems?: undefined | CheckitemProjection[]
}


export default ChecklistProjection