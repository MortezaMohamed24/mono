import User from "#models/user";
import {Oid} from "#util/oid";


function id(this: User): Oid {
  return this._id;
}


export default Object.freeze({id});