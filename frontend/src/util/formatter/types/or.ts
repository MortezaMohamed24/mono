import {INVALID} from "../constants";
import {Formatter} from "../formatter";
import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Or = Formatter[];

type Configs = {
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
}

type ReturnType<TOr extends Or, TConfigs extends Configs> =
  TConfigs["strict"] extends true
    ? TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? true
        : true
      : TConfigs["optional"] extends true
        ? TOr[number]["value"] | FallbackType<TConfigs> 
        : TOr[number]["value"]
    : TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? boolean
        : boolean
      : TConfigs["optional"] extends true
        ? TOr[number]["value"] | FallbackType<TConfigs> | INVALID 
        : TOr[number]["value"]

type FallbackType<TConfigs extends Configs> = 
  TConfigs extends {fallback: infer Fallback} 
    ? Fallback 
    : undefined

function OR<TOr extends Or, TConfigs extends Configs>(or: TOr, options: Options<TConfigs> = {} as Options<TConfigs>) {
  type Return = ReturnType<TOr, TConfigs>

  const name = "Or";

  return formatterify<TConfigs, unknown[], Return>({name, options},
    (unformatted, {strict, INVALID}) => {
      for (let formatter of or) {
        let formatted: unknown;

        try {
          formatted = formatter(unformatted, strict ? {strict} : undefined);
        } catch (e) {
          formatted = INVALID;
        }

        if (formatted !== INVALID) {
          return formatted as Return;
        }
      }
                
      throw null;
    }
  );
}


export default OR;