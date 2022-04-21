import Type from "../type";


const INFINITY = Type<number, {sign?: "-" | "+"}, number>({
  checker: (v, INVALID, {sign}) => {
    if ((
      sign === "-" && 
      v !== Number.NEGATIVE_INFINITY
    ) || (
      sign === "+" && 
      v !== Number.POSITIVE_INFINITY
    ) || (
      v !== Number.POSITIVE_INFINITY && v !== Number.NEGATIVE_INFINITY
    )) {
      return INVALID;
    } else {
      return v;
    }
  },

  typeName: ["Number"],
});


export default INFINITY;