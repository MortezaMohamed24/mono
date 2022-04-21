import {INVALID} from "../constants";
import {Formatter} from "../formatter";
import formatterify from "../formatterify";


type Content = Formatter[]

type Configs = {
  strict?: boolean;
  boolean?: boolean;
  optional?: boolean;
  fallback?: unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: string;
}

type ReturnType<TContent extends Content, TConfigs extends Configs> =
  TConfigs["strict"] extends true
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
        ? TContent[number]["value"][] | FallbackType<TConfigs>| INVALID 
        : TContent[number]["value"][]

type FallbackType<TConfigs extends Configs> = 
  TConfigs extends {fallback: infer Fallback} 
    ? Fallback 
    : undefined

function TUBLE<TContent extends Content, TConfigs extends Configs>(content: TContent, options: Options<TConfigs> = {} as Options<TConfigs>) {
  type Return = ReturnType<TContent, TConfigs>


  const name = "Tuble";
  const {strict} = options;
  const typeNames = ["Array"];


  return formatterify<TConfigs, unknown[], Return>({name, options, typeNames}, 
    (unformatted, {INVALID}) => {
      const copy: any[] = [];
      const length = content.length;
      
      for (let i = 0; i < length; i++) {
        const value = unformatted[i];
        const formatter = content[i];
        const formatted = formatter(value, strict ? {strict} : undefined);
  
        if (formatted === INVALID) {
          throw formatter.error(value);
        }
  
        copy[i] = formatted;
      }
  
      return copy as Return;
    }
  );
}


export default TUBLE;