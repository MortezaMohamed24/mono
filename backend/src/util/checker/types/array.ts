import Type from "../type/factory.js";
import {Checkable} from "../type/index.js";


interface Config {
  value: unknown[];
  return: unknown[]; 
  options: Checkable[];
}

const ARRAY = Type<Config>({
  typeNames: ["Array"],
  checker: (v, INVALID, elems) => {
    const copy: unknown[] = [];
    
    outer: for (let item of v) {
      for (let checkable of elems) {
        const output = checkable.check(item);
  
        if (output !== INVALID) {
          copy.push(output);
          continue outer;
        }
      }

      return INVALID;
    }

    return copy;
  },
});


export default ARRAY;