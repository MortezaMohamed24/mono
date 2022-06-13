import {Oid} from "#util/oid";
import Checklist from "src/models/checklist";


function id(this: Checklist): Oid {
  return this._id;
}


export default Object.freeze({id});