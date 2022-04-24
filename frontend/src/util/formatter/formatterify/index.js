import {ANY} from "../constants";
import {ErrorCreator} from "../errorCreator";
import {FormatterFactory} from "../formatter";


/** A wraaper around `Formatter()` that just supply default values */
function formatterify(options, formatCompleter) {
  const name = options.options?.name || options.name || "Type"; 
  const typeNames = options.options?.typeNames ?? options.typeNames ?? [ANY];


  const {
    error = ErrorCreator(name),
    strict = false,
    boolean = false,
    optional = false,
    fallback = undefined,
  } = options.options ?? {};


  const formatter = FormatterFactory({
    name, 
    error, 
    format: formatCompleter,
    strict,
    boolean,
    optional,
    fallback, 
    typeNames,
  });


  return formatter;    
}


export default formatterify;