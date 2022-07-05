import CRUD from "crud"
import {Card} from "./Model.js"
import {CardMethods} from "./Methods.js"
import {CardDocumentType} from "./DocumentType.js"


export const {
  f,
  u,
  h,
  d,
  fm,
  um,
  dm,
  he,
} = (
  CRUD<CardMethods, CardDocumentType>(Card)
)


export default Object.freeze({
  f,
  u,
  h,
  d,
  fm,
  um,
  dm,
  he,
})