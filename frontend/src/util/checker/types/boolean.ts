import Type from "../type";


const BOOLEAN = Type<boolean, {which?: boolean}, boolean>({
  checker: (v, INVALID, {which} = {}) => {
    if ((
      typeof v !== "boolean"
    ) || (
      which === true && v !== true
    ) || (
      which === false && v !== false
    )) {
      return INVALID;
    } else {
      return v;
    }
  },

  typeName: ["Boolean"],
});


export default BOOLEAN;