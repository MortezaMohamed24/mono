import {Oid} from "oid"


export interface CheckitemProjection {
  id?: Oid
  idUser?: Oid
  idList?: Oid
  idCard?: Oid
  idBoard?: Oid
  content?: string
  isComplete?: boolean
  idChecklist?: Oid
}


export default CheckitemProjection