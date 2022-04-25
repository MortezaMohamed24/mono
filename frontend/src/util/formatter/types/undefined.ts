import Type from "../formatter";


type Options = {
  name?: string;
}

function UNDEFINED({name}: Options = {}) {
  return Type(() => (
    undefined
  ), {
    name: name || "Undefined", 
    typeNames: ["Undefined"],
  });
}


export default UNDEFINED;