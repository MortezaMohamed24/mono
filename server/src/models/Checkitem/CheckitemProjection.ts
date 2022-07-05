import {Checkitem} from "./Checkitem.js"


export type CheckitemProjection = {
  id?: undefined | Checkitem["id"]
  idUser?: undefined | Checkitem["idUser"]
  idList?: undefined | Checkitem["idList"]
  idCard?: undefined | Checkitem["idCard"]
  idBoard?: undefined | Checkitem["idBoard"]
  content?: undefined | Checkitem["content"]
  isComplete?: undefined | Checkitem["isComplete"]
  idChecklist?: undefined | Checkitem["idChecklist"]
}


export default CheckitemProjection