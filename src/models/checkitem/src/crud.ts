import CRUD from "crud"
import {Checkitem} from "./Model.js"
import {CheckitemMethods} from "./Methods.js"
import {CheckitemDocumentType} from "./DocumentType.js"


export const cm = (
  CRUD<CheckitemMethods, CheckitemDocumentType>(Checkitem) as any
)

export const {
  f,
  u,
  h,
  d,
  fm,
  um,
  dm,
  he,
} = cm


export default cm