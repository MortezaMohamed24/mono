import {Oid} from "oid"
import {ALL_FILTER} from "./constants.js"
import {INCOMPLETE_FILTER} from "./constants.js"


export interface ChecklistDocumentType {
  _id: Oid
  title: string
  filter: typeof ALL_FILTER | typeof INCOMPLETE_FILTER
  idUser: Oid
  idList: Oid
  idCard: Oid
  idBoard: Oid
  idCheckitems: Oid[]
}


export default ChecklistDocumentType