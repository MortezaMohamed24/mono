import {INVALID} from "../constants";
import CheckTypeName from "../typeNameChecker/factory";


function Formatter({name, error, format, typeNames, ...baseFormattingModifiers}) {
  function copy(overriderOptions) {
    return Formatter({
      name,
      error,
      ...baseFormattingModifiers,
      ...overriderOptions,
      format,
      typeNames,
    })
  }

  function formatter(value, overrriderFormattingModifiers) {
    const {strict, boolean, optional, fallback} = {
      ...baseFormattingModifiers, 
      ...overrriderFormattingModifiers,
    };

    const formattingCompleterApi = {
      INVALID: INVALID,
    };


    try {
      if (checkTypeName(value)) {
        const formatted = format(value, formattingCompleterApi);
  
        if (boolean) {
          return false;
        }
        
        return formatted;
      } 
    }
  
    catch (e) {
      if (strict) {
        throw e === null 
          ? new TypeError(error(value))
          : new TypeError(`${e}: ${error(value)}`);
      } 
      
      if (boolean) {
        return false;
      } 
      
      return INVALID;
    }
       
    if (optional) {
      if (value === undefined) {
        return fallback;
      }
    }

    throw new TypeError(error(value));
  }


  const checkTypeName = CheckTypeName(typeNames);


  formatter.error = error;
  formatter.copy = copy;
  formatter.typeName = name;
  formatter.toString = () => `[object ${name}]`;
  formatter.checkTypeName = checkTypeName;


  return formatter;
}


export default Formatter;