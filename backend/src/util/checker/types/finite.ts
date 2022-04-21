import Type from "../type/factory.js";


interface Config {
  value: number;
  return: number;
  options: {
    min?: number; 
    max?: number;
  };
}


const FINITIE = Type<Config>({
  typeNames: ["Number"],
  checker: (v, INVALID, {min = -Infinity, max = Infinity}) => {
    if ((
      !Number.isFinite(v)
    ) || (
      v < min
    ) || (
      v > max
    )) {
      return INVALID;
    } else {
      return v;
    }
  },
});


export default FINITIE;