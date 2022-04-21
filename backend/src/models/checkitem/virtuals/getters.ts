import {Oid} from "#util/oid";
import Checkitem from "#models/checkitem";


function id(this: Checkitem): Oid {
  return this._id;
}


export default Object.freeze({id});