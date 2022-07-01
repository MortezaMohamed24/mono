import {Oid} from "oid"
import {ALL} from "./constants.js"
import {INCOMPLETE} from "./constants.js"


export interface ChecklistDocumentJSON {
  id: Oid
  title: string
  filter: typeof ALL | typeof INCOMPLETE
  idUser: Oid
  idList: Oid
  idCard: Oid
  idBoard: Oid
  idCheckitems: Oid[]
}


export default ChecklistDocumentJSON