import Formatter from "../formatter";


type Options = {
  name?: string;
}

function UNDEFINED({name}: Options = {}) {
  return Formatter(() => (
    undefined
  ), {
    name: name || "Undefined", 
    typeNames: ["Undefined"],
  });
}


export default UNDEFINED;