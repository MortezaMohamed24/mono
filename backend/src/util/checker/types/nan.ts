import Type from "../type/factory.js";


interface Config {
  value: number;
  return: number; 
  options: {};
}

const NAN = Type<Config>({
  typeNames: ["Number"],
  checker: (v, INVALID) => {
    if (v !== v) {
      return v;
    } else {
      return INVALID;
    }
  },
});


export default NAN;