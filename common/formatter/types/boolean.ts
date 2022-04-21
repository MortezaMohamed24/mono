import formatterify from "../formatterify";
import {ErrorCreator} from "..";


type Return<TConfigs extends Configs> = 
  TConfigs["which"] extends true
    ? true
    : TConfigs["which"] extends false
      ? false
      : boolean

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

function BOOLEAN<TConfigs extends Configs>(options: Options<TConfigs>) {
  const name = "Boolean";
  const which = options?.which ?? "unspecified";
  const typeNames = ["Boolean"];


  return formatterify<TConfigs, boolean, Return<TConfigs>>({name, options, typeNames}, 
    (unformatted, {error}) => {
      if ((
        which === true && unformatted !== true
      ) || (
        which === false && unformatted !== false
      )) {
        throw error();
      } else {
        return unformatted as Return<TConfigs>;
      }
    }
  );
}


export default BOOLEAN;