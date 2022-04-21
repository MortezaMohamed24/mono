import Type from "../type";


const FINITIE = Type<number, {min?: number, max?: number}, number>({
  checker: (v, INVALID, {min = -Infinity, max = Infinity}) => {
    if ((
      !Number.isFinite(v)
    ) || (
      v < min
    ) || (
      v > max
    )) {
      return INVALID;
    } else {
      return v;
    }
  },
  
  typeName: ["Number"],
});


export default FINITIE;