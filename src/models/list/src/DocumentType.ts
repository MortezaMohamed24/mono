import {Oid} from "oid"
import {DATE_CREATED_ASCENDING} from "./constants.js"
import {DATE_CREATED_DESCENDING} from "./constants.js"
import {ALPHABETICALLY_ASCENDING} from "./constants.js"
import {ALPHABETICALLY_DESCENDING} from "./constants.js"


export interface ListDocumentType {
  _id: Oid
  title: string
  idUser: Oid
  idBoard: Oid
  idCards: Oid[]
  isWatched: boolean
  sortMethod: 
    | typeof DATE_CREATED_ASCENDING 
    | typeof DATE_CREATED_DESCENDING 
    | typeof ALPHABETICALLY_ASCENDING 
    | typeof ALPHABETICALLY_DESCENDING
}


export default ListDocumentType