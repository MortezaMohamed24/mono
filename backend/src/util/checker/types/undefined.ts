import Type from "../type/index.js";


interface Config {
  value: unknown; 
  return: undefined;
  options: {};
}

const UNDEFINED = Type<Config>({
  typeNames: ["Undefined"],
  checker: (v, INVALID) => {
    if (v === undefined) {
      return undefined;
    } else {
      return INVALID;
    }
  },
});


export default UNDEFINED;