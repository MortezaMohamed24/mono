import {Oid} from "oid"
import Methods from "./methods/type.js"
import Virtuals from "./virtuals/type.js"
import {Document} from "mongoose"
import DocumentType from "./DocumentType.js"


export interface CheckitemDocument extends Omit<Document<Oid, {}, DocumentType>, "_id" | "id">, DocumentType, Methods, Virtuals {
  // Empty
}


export default CheckitemDocument