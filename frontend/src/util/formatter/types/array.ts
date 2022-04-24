import {INVALID} from "../constants"; 
import {TypeName} from "../typeNameChecker";
import {Formatter} from "../formatter";
import ErrorCreator from "../errorCreator";
import formatterify from "../formatterify";


type Configs = {
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}

type Content = Formatter[];

type Options<TConfigs extends Configs> = TConfigs & {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
  typeNames?: undefined | TypeName[];
}

type ReturnType<TContent extends Content, TConfigs extends Configs> =
  TContent extends any[]
    ? TConfigs["strict"] extends true
      ? TConfigs["boolean"] extends true
        ? TConfigs["optional"] extends true
          ? true
          : true
        : TConfigs["optional"] extends true
          ? TContent[number]["value"][] | FallbackType<TConfigs> 
          : TContent[number]["value"][]
      : TConfigs["boolean"] extends true
        ? TConfigs["optional"] extends true
          ? boolean
          : boolean
        : TConfigs["optional"] extends true
          ? INVALID | TContent[number]["value"][] | FallbackType<TConfigs> 
          : INVALID | TContent[number]["value"][]
    : any[]

type FallbackType<TConfigs extends Configs> = 
  TConfigs extends {fallback: infer Fallback} 
    ? Fallback 
    : undefined

function ARRAY<TContent extends Content, TConfigs extends Configs>(content: TContent, options: Options<TConfigs> = {} as Options<TConfigs>) {
  type Return = ReturnType<TContent, TConfigs>
  

  const name = "Array";
  const typeNames = ["Array"];


  return formatterify<TConfigs, unknown[], Return>({name, options, typeNames},
    (unformatted, {strict, INVALID}) => {
      const copy: unknown[] = [];
      
      for (let item of unformatted) {
        for (let formatter of content) {
          const formatted = formatter(item, strict ? {strict} : undefined);

          if (formatted === INVALID) {
            throw formatter.error(item);
          }

          copy.push(formatted);
        }
      }
      
      return copy as Return;
    }
  );
}


export default ARRAY;