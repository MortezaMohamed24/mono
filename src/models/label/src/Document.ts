import {Oid} from "oid"
import {Document} from "mongoose"
import {LabelMethods} from "./Methods.js"
import {LabelDocumentType} from "./DocumentType.js"


export type LabelDocument = (
  & Omit<Document<Oid, {}, LabelDocumentType>, keyof LabelDocumentType>
  & LabelDocumentType
  & LabelMethods
)


export default LabelDocument