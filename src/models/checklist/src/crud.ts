import CRUD from "crud"
import Checklist from "./Model.js"
import ChecklistMethods from "./Methods.js"
import ChecklistDocumentType from "./DocumentType.js"


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
  CRUD<ChecklistMethods, ChecklistDocumentType>(Checklist)
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