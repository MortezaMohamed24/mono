import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Configs = {
  emit?: undefined | "oid" | "string";
  strict?: boolean;
  boolean?: boolean;
  optional?: boolean;
  fallback?: unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
}

/** Matches an Object Id's hex string representation */
const PATTERN = /^[0-9a-fA-F]{24}$/;

function OID<TConfigs extends Configs>(options: Options<TConfigs> = {} as Options<TConfigs>) {
  const name = "Oid";
  const typeNames = ["Object", "String"];


  return formatterify<TConfigs, string, string>({name, options, typeNames},
    (unformatted) => {
      unformatted = unformatted.trim().toLowerCase();

      if (PATTERN.test(unformatted)) {
        return unformatted;
      } 
      
      throw null;
    },
  );
}


export default OID;