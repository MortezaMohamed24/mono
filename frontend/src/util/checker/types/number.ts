import Type from "../type";


interface Options {
  readonly min?: number; 
  readonly max?: number; 
  readonly safe?: boolean;
  readonly nonNaN?: boolean;
}

const NUMBER = Type<number, Options, number>({
  checker: (v, INVALID, {min = -Infinity, max = Infinity, safe = false, nonNaN = false}) => {
    if (typeof v !== "number") {
      return INVALID;
    } 
    
    if (nonNaN) {
      if (v !== v) {
        return INVALID;
      }
    }

    if (v < min || v > max) {
      return INVALID;
    } 
    
    if (safe) {
      if ((
        v < Number.MIN_SAFE_INTEGER
      ) || (
        v > Number.MAX_SAFE_INTEGER
      )) {
        return INVALID;
      } 
    } 
    
    return v;
  },

  typeName: ["Number"],
});


export default NUMBER;