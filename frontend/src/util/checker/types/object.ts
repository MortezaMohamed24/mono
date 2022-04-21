import Type from "../type";
import {INVALID} from "../constants";


type ValueCheckerReturn = unknown;
type ValueCheckerOptions = {[key: string]: (value: unknown) => unknown | INVALID};
type ValueCheckerArgument = {[key: string]: unknown};


const OBJECT = Type<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn>({
  checker: (v, INVALID, props) => {
    const copy: any = {};
    
    for (let key in props) {
      const output = props[key](v[key]);

      if (output === INVALID) {
        return output;
      }

      copy[key] = output;
    }

    return copy;
  },

  typeName: ["Object"],
});


export default OBJECT;