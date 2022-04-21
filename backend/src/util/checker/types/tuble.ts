import Type from "../type/factory.js";
import {Checkable} from "../type/index.js";


interface Config {
  value: unknown[];
  return: unknown[];
  options: Checkable[];
}

const TUBLE = Type<Config>({
  typeNames: ["Array"],
  checker: (v, INVALID, elems) => {
    const copy: any[] = [];
    const length = elems.length;
    
    for (let i = 0; i < length; i++) {
      const output = elems[i].check(v[i]);

      if (output === INVALID) {
        return INVALID;
      }

      copy[i] = output;
    }

    return copy;
  },
});


export default TUBLE;