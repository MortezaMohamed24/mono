import {model} from "mongoose"
import {Model} from "mongoose"
import {schema} from "./schema.js"
import {LabelMethods} from "./Methods.js"
import {LabelStatics} from "./Statics.js"
import {LabelDocument} from "./Document.js"
import {LabelDocumentType} from "./DocumentType.js"


export type LabelModel = (
  & Model<LabelDocumentType, {}, LabelMethods>
  & LabelStatics
)

export type Label = (
  LabelDocument
)

export const Label = (
  model<LabelDocumentType, LabelModel, LabelMethods>("Label", schema)
)


export default Label