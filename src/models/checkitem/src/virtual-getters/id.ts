import {Oid} from "oid"
import Checkitem from "../Model.js"


export function id(this: Checkitem): Oid {
  return this._id
}


export default id