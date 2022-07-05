import CRUD from "crud"
import {Label} from "./Model.js"
import {LabelMethods} from "./Methods.js"
import {LabelDocumentType} from "./DocumentType.js"


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
  CRUD<LabelMethods, LabelDocumentType>(Label)
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