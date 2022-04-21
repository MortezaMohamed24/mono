import formatterify from "../formatterify";
import {ErrorCreator} from "..";


type Configs = {
  which?: undefined | boolean | "unspecified";
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
}

type ReturnType<TConfigs extends Configs> = 
  TConfigs["which"] extends true
    ? true
    : TConfigs["which"] extends false
      ? false
      : boolean

function BOOLEAN<TConfigs extends Configs>(options: Options<TConfigs> = {} as Options<TConfigs>) {
  const name = "Boolean";
  const which = options?.which ?? "unspecified";
  const typeNames = ["Boolean"];


  return formatterify<TConfigs, boolean, ReturnType<TConfigs>>({name, options, typeNames}, 
    (unformatted) => {
      if ((
        which === true && unformatted !== true
      ) || (
        which === false && unformatted !== false
      )) {
        throw null;
      } else {
        return unformatted as ReturnType<TConfigs>;
      }
    }
  );
}


export default BOOLEAN;