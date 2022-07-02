import {Oid} from "oid"
import {Document} from "mongoose"
import {ListMethods} from "./Methods.js"
import {ListDocumentType} from "./DocumentType.js"


export type ListDocument = (
  & Omit<Document<Oid, {}, ListDocumentType>, keyof ListDocumentType>
  & ListDocumentType 
  & ListMethods 
)


export default ListDocument