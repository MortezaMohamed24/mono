import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Configs = {
  nan?: undefined | boolean | "unspecified";
  min?: undefined | number; 
  max?: undefined | number; 
  safe?: undefined | boolean;
  sign?: undefined | "+" | "-" | "unspecified";
  name?: undefined | string;
  error?: undefined | ErrorCreator;
  finite?: undefined | boolean | "unspecified";
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
  infinity?: undefined | boolean | "-infinity" | "+infinity" | "unspecified";
}

function NUMBER<TConfigs extends Configs>(options: TConfigs) {
  type Return = number

  const {
    nan = "unspecified",
    max = Infinity,
    min = -Infinity,
    name = "Number",
    sign = "unspecified",
    safe = false,
    error,
    finite = "unspecified",
    strict,
    boolean,
    fallback,
    optional,
    infinity = "unspecified",
  } = options ?? {};


  return formatterify<TConfigs, number, Return>({options: {
    name,
    error,
    strict,
    boolean,
    optional,
    fallback,
    typeNames: ["Number"],
  }},

  (unformatted, {error}) => {
    if (nan !== "unspecified") {
      switch (nan) {
        case true: 
          if (Object.is(unformatted, NaN)) {
            return NaN;
          } else {
            throw error();
          }

        case false: 
          if (Object.is(unformatted, NaN)) {
            throw error();
          } else {
            return NaN;
          }
      }  
    }

    if (infinity !== "unspecified") {
      switch (infinity) {
        case true: 
          if (unformatted === Infinity || unformatted === -Infinity) {
            return unformatted;
          } else {
            throw error();
          }

        case false: 
          if (unformatted !== Infinity && unformatted !== -Infinity) {
            return unformatted;
          } else {
            throw error();
          }

        case "+infinity": 
          if (unformatted === Infinity) {
            return unformatted;
          } else {
            throw error();
          }

        case "-infinity": 
          if (unformatted === -Infinity) {
            return unformatted;
          } else {
            throw error();
          }
      }
    }

    if ((
      unformatted >= min
    ) && (
      unformatted <= max
    ) && (
      sign === "-" ? unformatted < 0 : true
    ) && (
      sign === "+" ? unformatted >= 0 : true
    ) && (
      safe ? isSafeNumber(unformatted) : true
    ) && (
      finite === true ? Number.isFinite(unformatted) : true
    ) && (
      finite === false ? !Number.isFinite(unformatted) : true
    )) {
      return unformatted;
    }
    
    throw error();
  });
}

function isSafeNumber(number: number) {
  return Number.MAX_SAFE_INTEGER >= number && number <= Number.MAX_SAFE_INTEGER;
}


export default NUMBER;