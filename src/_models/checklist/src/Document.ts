import {Oid} from "oid"
import {Document} from "mongoose"
import {ChecklistMethods} from "./Methods.js"
import {ChecklistDocumentType} from "./DocumentType.js"


export type ChecklistDocument = (
  Omit<Document<Oid, {}, ChecklistDocumentType>, keyof ChecklistDocumentType>
  & ChecklistDocumentType
  & ChecklistMethods
)


export default ChecklistDocument