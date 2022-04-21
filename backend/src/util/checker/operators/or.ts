import {INVALID} from "../constants.js";
import {Checkable} from "../type/index.js";


function Or<Return = unknown>(or: Checkable[]) {
  function check(value: unknown) {
    for (let checkable of or) {
      const output = checkable.check(value);

      if (output !== INVALID) {
        return output as Return;
      }
    }

    return INVALID;
  }

  function opt<Fallback>(fallback: Fallback) {
    return {
      check(value: unknown) {
        if (value === undefined) {
          return fallback;
        } else {
          return check(value);
        } 
      },
    };
  }

  return {check, opt};
}


export default Or;