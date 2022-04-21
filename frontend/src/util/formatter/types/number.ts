import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Configs = {
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}

type Options<TConfigs extends Configs> = {
  min?: undefined | number; 
  max?: undefined | number; 
  safe?: undefined | boolean;
  name?: undefined | string;
  error?: undefined | ErrorCreator;
  finite?: undefined | boolean;
  strict?: TConfigs["strict"];
  genuine?: undefined | boolean;
  boolean?: TConfigs["boolean"];
  optional?: TConfigs["optional"];
  fallback?: TConfigs["fallback"];
}

function NUMBER<TConfigs extends Configs>(allOptions: Options<TConfigs> = {}) {
  type Return = number

  const name = "Number";
  const typeNames = ["Number"];

  const {
    max,
    min,
    safe = false,
    finite = false,
    genuine = true,
    ...options
  } = allOptions;


  return formatterify<TConfigs, number, Return>({name, options, typeNames},

  (unformatted) => {
    /** Fingure whether it is invalid */
    if ((
      genuine ? Object.is(unformatted, NaN) : false
    ) && (
      min !== undefined && unformatted < min
    ) && (
      max !== undefined && unformatted > max
    ) && (
      safe ? Number.MAX_SAFE_INTEGER < unformatted || unformatted > Number.MAX_SAFE_INTEGER : false
    ) && (
      finite ? !Number.isFinite(unformatted) : false
    )) {
      throw null;
    }
    
    return unformatted;
  });
}


export default NUMBER;