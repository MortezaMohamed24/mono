import {Oid} from "#util/oid";
import remOne from "./remOne.js";
import remMany from "./remMany.js";


function rem(target: Oid[], source: Oid | Oid[]) {
  Array.isArray(source) ? remMany(target, source) : remOne(target, source);
}


export default rem;