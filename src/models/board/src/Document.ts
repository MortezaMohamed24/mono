import {Oid} from "oid"
import {Document} from "mongoose"
import {BoardMethods} from "./Methods.js"
import {BoardDocumentType} from "./DocumentType.js"


export type BoardDocument = (
  & Omit<Document<Oid, {}, BoardDocumentType>, keyof BoardDocumentType>
  & BoardDocumentType
  & BoardMethods
)


export default BoardDocument