import Type from "../type/factory.js";
import {Checkable} from "../type/index.js";


interface Config {
  value: {[key: string]: unknown};
  return: {[key: string]: unknown};
  options: Record<string, Checkable>;
}

const OBJECT = Type<Config>({
  typeNames: ["Object"],
  checker: (v, INVALID, props) => {
    const copy: any = {};
    
    for (let key in props) {
      const output = props[key].check(v[key]);

      if (output === INVALID) {
        return output;
      }

      copy[key] = output;
    }

    return copy;
  },
});


export default OBJECT;