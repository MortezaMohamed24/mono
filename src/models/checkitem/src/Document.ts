import {Oid} from "oid"
import {Document} from "mongoose"
import {CheckitemMethods} from "./Methods.js"
import {CheckitemDocumentType} from "./DocumentType.js"


export type CheckitemDocument = (
  & Omit<Document<Oid, {}, CheckitemDocumentType>, keyof CheckitemDocumentType>
  & CheckitemDocumentType
  & CheckitemMethods
)


export default CheckitemDocument