import CRUD from "crud"
import {User} from "./Model.js"
import {UserMethods} from "./Methods.js"
import {UserDocumentType} from "./DocumentType.js"


export const {
  f,
  u,
  h,
  d,
  fm,
  um,
  dm,
  he,
} = (CRUD<UserMethods, UserDocumentType>(User))


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