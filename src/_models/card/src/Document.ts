import {Oid} from "oid"
import {Document} from "mongoose"
import {CardMethods} from "./Methods.js"
import {CardDocumentType} from "./DocumentType.js"


export type CardDocument = ( 
  & Omit<Document<Oid, {}, CardDocumentType>, keyof CardDocumentType>
  & CardDocumentType
  & CardMethods
)


export default CardDocument