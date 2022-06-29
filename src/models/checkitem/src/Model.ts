import {model} from "mongoose"
import {Model} from "mongoose"
import {schema} from "./schema.js"
import {CheckitemStatics} from "./Statics.js"
import {CheckitemMethods} from "./Methods.js"
import {CheckitemDocument} from "./Document.js"
import {CheckitemVirtuals} from "./Virtuals.js"
import {CheckitemDocumentType} from "./DocumentType.js"


export type Checkitem = (
  CheckitemDocument
)

export const Checkitem = (
  model<CheckitemDocumentType, CheckitemModel, CheckitemMethods>("Checkitem", schema)
)

export type CheckitemModel = (
  & Model<CheckitemDocumentType, {}, CheckitemMethods, CheckitemVirtuals>
  & CheckitemStatics
)


export default Checkitem