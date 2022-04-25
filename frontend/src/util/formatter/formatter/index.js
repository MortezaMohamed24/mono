import {ANY} from "../constants";
import {INVALID} from "../constants";
import TypeError from "../TypeError";
import CheckTypeName from "../typeNameChecker/factory";


function prepare(options = {}) {
  const {
    name = "Type",
    strict = false,
    boolean = false,
    optional = false,
    fallback = undefined,
    typeNames = [ANY],      
  } = options;

  return {
    name,
    typeNames,
    baseModifiers: {
      strict,
      boolean,
      optional,
      fallback,
    },
  };
}

function merge(baseModifiers, overriderModifiers) {
  return {
    ...baseModifiers, 
    ...overriderModifiers,
  };
}

function FormatterFactory(format, options) {
  const {name, typeNames, baseModifiers} = prepare(options);


  function type(value, overriderModifiers) {
    const {strict, boolean, optional, fallback} = merge(baseModifiers, overriderModifiers);

    const formattingCompleterApi = {
      strict, 
      INVALID,
      boolean, 
      optional,
    };

    try {
      if (type.checkTypeName(value)) {
        const formatted = format(value, formattingCompleterApi);
  
        if (boolean) {
          return true;
        }
        
        return formatted;
      }

      if (optional) {
        if (value === undefined) {
          return fallback;
        }
      }
  
      throw INVALID;
    }
  
    catch (e) {
      if (strict) {
        if (e instanceof TypeError) {
          throw new TypeError(`${e.typeName}/${name}`, value);
        } else {
          throw new TypeError(name, value);
        }
      } 
      
      if (boolean) {
        return false;
      } 
      
      return INVALID;
    }     
  }

  function copy(overriderOptions) {
    return FormatterFactory(format, {
      ...options,
      ...overriderOptions,
    });
  }


  type.copy = copy;
  type.typeName = name;
  type.toString = () => `[object ${name}]`;
  type.checkTypeName = CheckTypeName(typeNames);


  return type;
}


export {FormatterFactory};
export default FormatterFactory;