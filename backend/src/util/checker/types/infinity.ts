import Type from "../type/factory.js";


interface Config {
  value: number;
  return: number;
  options: {
    sign?: "-" | "+";
  }
}

const INFINITY = Type<Config>({
  typeNames: ["Number"],
  checker: (v, INVALID, {sign}) => {
    if ((
      sign === "-" && 
      v !== Number.NEGATIVE_INFINITY
    ) || (
      sign === "+" && 
      v !== Number.POSITIVE_INFINITY
    ) || (
      v !== Number.POSITIVE_INFINITY && v !== Number.NEGATIVE_INFINITY
    )) {
      return INVALID;
    } else {
      return v;
    }
  },
});


export default INFINITY;