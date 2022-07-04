import {CRUD} from "crud"
import {List} from "./Model.js"
import {ListMethods} from "./Methods.js"
import {ListDocumentType} from "./DocumentType.js"


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
  CRUD<ListMethods, ListDocumentType>(List)
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