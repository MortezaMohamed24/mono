import {Oid} from "oid"
import {Document} from "mongoose"
import {UserMethods} from "./Methods.js"
import {UserDocumentType} from "./DocumentType.js"


export type UserDocument = (
  & Omit<Document<Oid, {}, UserDocumentType>, keyof UserDocumentType>
  & UserDocumentType
  & UserMethods
)


export default UserDocument