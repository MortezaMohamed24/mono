import Type from "../type/factory.js";


interface Config {
  value: null;
  return: null;
  options: {};
}

const NULL = Type<Config>({
  typeNames: ["Null"],
  checker: (v, INVALID) => {
    if (v === null) {
      return v;
    } else {
      return INVALID;
    }
  },
});


export default NULL;