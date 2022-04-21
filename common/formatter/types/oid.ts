import {Oid} from "/util/idUtil";
import {PATTERN} from "/util/idUtil";
import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Configs = {
  omit?: undefined | "oid" | "string";
  strict?: boolean;
  boolean?: boolean;
  optional?: boolean;
  fallback?: unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
}

function OID<TConfigs extends Configs>(options: Options<TConfigs> = {} as Options<TConfigs>) {
  type Return = TConfigs["omit"] extends "oid" ? Oid : string


  return formatterify<TConfigs, string, Return>({
    name: "Oid", 
    options: options, 
    typeNames: ["String"],
  },
   
  (unformatted, {error}) => {
    unformatted = unformatted.trim().toLowerCase();

    if (!PATTERN.test(unformatted)) {
      throw error();
    } else if (options.omit === "oid") {
      return new Oid(unformatted) as Return;
    } 
    
    return unformatted as Return;
  });
}


export default OID;