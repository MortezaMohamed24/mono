import Type from "../type/factory.js";


interface Config {
  value: boolean; 
  return: boolean;
  options: {
    which?: true | false;
  };
}

const BOOLEAN = Type<Config>({
  typeNames: ["Boolean"],
  checker: (v, INVALID, {which}) => {
    if ((
      typeof v !== "boolean"
    ) || (
      which === true && v !== true
    ) || (
      which === false && v !== false
    )) {
      return INVALID;
    } else {
      return v;
    }
  },
});


export default BOOLEAN;