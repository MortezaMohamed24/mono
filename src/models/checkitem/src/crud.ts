import CRUD from "crud"
import {Checkitem} from "./Model.js"
import {CheckitemMethods} from "./Methods.js"
import {CheckitemDocumentType} from "./DocumentType.js"


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
  CRUD<CheckitemMethods, CheckitemDocumentType>(Checkitem)
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