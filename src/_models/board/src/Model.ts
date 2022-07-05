import {model} from "mongoose"
import {Model} from "mongoose"
import {schema} from "./schema.js"
import {BoardMethods} from "./Methods.js"
import {BoardStatics} from "./Statics.js"
import {BoardDocument} from "./Document.js"
import {BoardDocumentType} from "./DocumentType.js"


export type BoardModel = (
  & Model<BoardDocumentType, {}, BoardMethods>
  & BoardStatics
)

export type Board = (
  BoardDocument
)

export const Board = (
  model<BoardDocumentType, BoardModel, BoardMethods>("Board", schema)
)


export default Board