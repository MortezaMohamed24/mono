import {INVALID} from "../constants.js";
import {Argument} from "./types.js";
import {BaseConfig} from "./types.js";
import matchesEitherTypeName from "./matchesEitherTypeName.js";


const Type = <Config extends BaseConfig>({checker, typeNames}: Argument<Config>) => {
  type Return = ReturnType<typeof checker>
  type Options = Parameters<typeof checker>["2"]


  function Checkable<_Return = Return>(options: Options) {
    function check(value: unknown) {
      if (matchesEitherTypeName(value, typeNames)) {
        return checker(value, INVALID, options) as _Return;
      } else {
        return INVALID;
      }
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
  
  
  return Checkable;
};


export default Type;