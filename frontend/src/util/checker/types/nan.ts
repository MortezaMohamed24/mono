import Type from "../type";


const NAN = Type<number, undefined, number>({
  checker: (v, INVALID) => {
    if (v !== v) {
      return v;
    } else {
      return INVALID;
    }
  },

  typeName: ["Number"],
});


export default NAN;