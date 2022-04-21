import {ANY} from "../constants";
import classOf from "/util/object/classOf";
import {TypeName} from "./types";


const TypeNameChecker = (typeNameOrNames: TypeName | TypeName[]) => (
  Array.isArray(typeNameOrNames)
    ? MultipleTypeNameChecker(typeNameOrNames) 
    : SingularTypeNameChecker(typeNameOrNames) 
);

const MultipleTypeNameChecker = (typeNames: TypeName[]) => (value: unknown) => {
  for (let typeName of typeNames) {
    if (typeName === ANY || classOf(value) === typeName) {
      return true;
    }
  }
  
  return false;
};

const SingularTypeNameChecker = (typeName: TypeName) => (value: unknown) => (
  typeName === ANY || classOf(value) === typeName
);


export default TypeNameChecker;