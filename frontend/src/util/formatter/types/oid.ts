import {ObjectId} from "bson/src/objectid";
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
  type Return = TConfigs["emit"] extends "oid" ? ObjectId : string


  const name = "Oid";
  const typeNames = ["Object", "String"];


  return formatterify<TConfigs, ObjectId | string, Return>({name, options, typeNames},
    (unformatted) => {
      if (unformatted instanceof ObjectId) {
        if (options.emit === "oid") {
          return new ObjectId(unformatted) as Return;
        } else {
          return unformatted.toHexString() as Return;
        }
      }

      unformatted = unformatted.trim().toLowerCase();

      if (!PATTERN.test(unformatted)) {
        if (options.emit === "oid") {
          return new ObjectId(unformatted) as Return;
        } else {
          return unformatted as Return;
        }
      } 
      
      throw null;
    },
  );
}


export default OID;