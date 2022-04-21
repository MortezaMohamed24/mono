import {ANY} from "../constants.js";
import {classOf} from "#util/object";
import {TypeName} from "./index.js";


function matchesEitherTypeName(value: unknown, typeNames: TypeName[]) {
  for (let typeName of typeNames) {
    if (typeName === ANY || classOf(value) === typeName) {
      return true;
    }
  }
  
  return false;
}


export default matchesEitherTypeName;