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
      error: () => error(value), 
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
      
      if (optional) {
        if (value === undefined) {
          return fallback;
        }
      }

      throw error(value);
    } 
    

    catch (e) {
      if (strict) {
        throw e;
      } 
      
      if (boolean) {
        return false;
      } 
      
      return INVALID;
    }
  }


  const checkTypeName = CheckTypeName(typeNames);


  formatter.error = error;
  formatter.typeName = name;
  formatter.toString = () => `[object ${name}]`;
  formatter.checkTypeName = checkTypeName;


  return formatter;
}


export default Formatter;