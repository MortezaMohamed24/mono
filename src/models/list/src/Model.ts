import {Model} from "mongoose"
import {model} from "mongoose"
import {schema} from "./schema.js"
import {ListStatics} from "./Statics.js"
import {ListMethods} from "./Methods.js"
import {ListDocument} from "./Document.js"
import {ListDocumentType} from "./DocumentType.js"


export type ListModel = (
  & Model<ListDocumentType, {}, ListMethods> 
  & ListStatics
)

export type List = (
  ListDocument
)

export const List = (
  model<ListDocumentType, ListModel, ListMethods>("List", schema)
)


export default List