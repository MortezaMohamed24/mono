import List from "src/models/list";
import {Oid} from "#util/oid";


function id(this: List): Oid {
  return this._id;
}


export default Object.freeze({id});