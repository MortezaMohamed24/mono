import Type from "../type/factory.js";


interface Config {
  value: number;
  return: number;
  options: {
    min?: number; 
    max?: number; 
    safe?: true;
  }
}

const NUMBER = Type<Config>({
  typeNames: ["Number"],
  checker: (v, INVALID, {min = -Infinity, max = Infinity, safe = false}) => {
    if ((
      typeof v !== "number"
    ) || (
      v < min
    ) || (
      v > max
    ) || (
      safe && (v < Number.MIN_SAFE_INTEGER || v > Number.MAX_SAFE_INTEGER)
    )) {
      return INVALID;
    } else {
      return v;
    }
  },
});


export default NUMBER;