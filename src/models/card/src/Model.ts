import {model} from "mongoose"
import {Model} from "mongoose"
import {schema} from "./schema.js"
import {CardMethods} from "./Methods.js"
import {CardStatics} from "./Statics.js"
import {CardDocument} from "./Document.js"
import {CardDocumentType} from "./DocumentType.js"


export type CardModel = (
  & Model<CardDocumentType, {}, CardMethods>
  & CardStatics
)

export type Card = (
  CardDocument
)

export const Card = (
  model<CardDocumentType, CardModel, CardMethods>("Card", schema)
)


export default Card