import Type from "../type";
import {INVALID} from "../constants";


type ValueCheckerReturn = unknown[];
type ValueCheckerOptions = ((value: unknown) => unknown | INVALID)[];
type ValueCheckerArgument = unknown[];


const TUBLE = Type<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn>({
  checker: (v, INVALID, elems) => {
    const copy: any[] = [];
    const length = elems.length;
    
    for (let i = 0; i < length; i++) {
      const output = elems[i](v[i]);

      if (output === INVALID) {
        return INVALID;
      }

      copy[i] = output;
    }

    return copy;
  },

  typeName: ["Array"],
});


export default TUBLE;