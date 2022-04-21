import {ANY} from "../constants";
import typeNameOf from "./typeNameOf";
import {TypeName} from "./type";


function checkTypeName(typeNames: TypeName[], value: unknown) {
  for (let typeName of typeNames) {
    if ((
      typeName === ANY
    ) || (
      typeNameOf(value) === typeName
    )) {
      return true;
    }
  }
  
  return false;
}


export default checkTypeName;