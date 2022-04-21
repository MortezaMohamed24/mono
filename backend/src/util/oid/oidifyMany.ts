import Oid from "./oid.js";
import pattern from "./pattern.js";
import oidifyOne from "./oidifyOne.js";


function oidifyMany(many: any): Oid[] {
  if (Array.isArray(many)) {
    return many.map(any => oidifyOne(any));
  } else {
    throw new Error(`Expected an array of Oids or strings matching ${pattern.source}`);
  }
}


export default oidifyMany;