import {Oid} from "oid"
import {COLORS} from "./constants.js"


export interface LabelDocumentJSON {
  id: Oid
  name: string | null
  color: keyof typeof COLORS
  idUser: Oid
  idBoard: Oid
}


export default LabelDocumentJSON