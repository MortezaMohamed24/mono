import Formatter from "../formatter";


type Options = {
  nan?: undefined | boolean;
  min?: undefined | number; 
  max?: undefined | number; 
  safe?: undefined | boolean;
  name?: undefined | string;
  finite?: undefined | boolean;
}

const NUMBER = ({nan, min, max, name, safe, finite}: Options = {}) => (
  Formatter<number, number>((unformatted, {INVALID}) => {
    if (nan) {
      if (Object.is(unformatted, NaN)) {
        return unformatted;
      } else {
        throw INVALID;
      }
    }

    if (Object.is(unformatted, NaN)) {
      throw INVALID;
    }

    if ((
      min !== undefined ? unformatted >= min : true
    ) && (
      max !== undefined ? unformatted <= max : true
    ) && (
      safe ? Number.MAX_SAFE_INTEGER >= unformatted && unformatted <= Number.MAX_SAFE_INTEGER : true
    ) && (
      finite ? Number.isFinite(unformatted) : true
    )) {
      return unformatted;
    }
    
    throw null;
  }, {
    name: name || "Number",
    typeNames: ["Number"],
  })
);


export default NUMBER;