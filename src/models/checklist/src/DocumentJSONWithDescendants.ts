import {Oid} from "oid"
import {ALL} from "./constants.js"
import {INCOMPLETE} from "./constants.js"
import {CheckitemDocumentJSON} from "checkitem/DocumentJSON.js"


export interface ChecklistDocumentJSONWithDescendants {
  id: Oid
  title: string
  filter: typeof ALL | typeof INCOMPLETE
  idUser: Oid
  idList: Oid
  idCard: Oid
  idBoard: Oid
  checkitems: CheckitemDocumentJSON[]
}


export default ChecklistDocumentJSONWithDescendants