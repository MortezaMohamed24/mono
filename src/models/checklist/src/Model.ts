import {Model} from "mongoose"
import {model} from "mongoose"
import {schema} from "./schema.js"
import {ChecklistMethods} from "./Methods.js"
import {ChecklistStatics} from "./Statics.js"
import {ChecklistDocument} from "./Document.js"
import {ChecklistDocumentType} from "./DocumentType.js"


export type ChecklistModel = (
  & Model<ChecklistDocumentType, {}, ChecklistMethods>
  & ChecklistStatics
)

export type Checklist = (
  ChecklistDocument
)

export const Checklist = model<ChecklistDocumentType, ChecklistModel, ChecklistMethods>("Checklist", schema)



export default Checklist