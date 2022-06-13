import {Oid} from "#util/oid";
import remOne from "./remOne.js";


function remMany(target: Oid[], source: Oid[]) {
  for (let id of source) {
    remOne(target, id);
  }
}


export default remMany;