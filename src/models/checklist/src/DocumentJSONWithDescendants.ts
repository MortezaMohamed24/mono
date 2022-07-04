import {Oid} from "oid"
import {ALL_FILTER} from "./constants.js"
import {INCOMPLETE_FILTER} from "./constants.js"
import {CheckitemDocumentJSON} from "checkitem/DocumentJSON.js"


export interface ChecklistDocumentJSONWithDescendants {
  id: Oid
  title: string
  filter: typeof ALL_FILTER | typeof INCOMPLETE_FILTER
  idUser: Oid
  idList: Oid
  idCard: Oid
  idBoard: Oid
  checkitems: CheckitemDocumentJSON[]
}


export default ChecklistDocumentJSONWithDescendants