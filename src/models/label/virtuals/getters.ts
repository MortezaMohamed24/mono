import {Oid} from "#util/oid";
import Label from "src/models/label";


function id(this: Label): Oid {
  return this._id;
}


export default Object.freeze({id});