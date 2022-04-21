import {INVALID} from "../constants";
import {TypeName} from "../typeNameChecker";
import {Formatter} from "../formatter";
import ErrorCreator from "../errorCreator";
import formatterify from "../formatterify";


type Configs = {
  name?: string;
  error?: ErrorCreator;
  strict?: boolean;
  boolean?: boolean;
  optional?: boolean;
  fallback?: unknown;
  typeNames?: TypeName[];
}

type Content = {
  [key: string]: Formatter;
  [key: symbol]: Formatter;
  [key: number]: Formatter;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: string;
  error?: ErrorCreator;
  typeNames?: TypeName[];
}

type ReturnType<TContent extends Content, TConfigs extends Configs> = 
  TContent extends object
    ? TConfigs["strict"] extends true
      ? TConfigs["boolean"] extends true 
        ? TConfigs["optional"] extends true
          ? true
          : true
        : TConfigs["optional"] extends true
          ? Fieldify<TContent> | FallbackType<TConfigs>
          : Fieldify<TContent>
      : TConfigs["boolean"] extends true 
        ? TConfigs["optional"] extends true
          ? boolean
          : boolean
        : TConfigs["optional"] extends true
          ? INVALID | Fieldify<TContent> | FallbackType<TConfigs>
          : INVALID | Fieldify<TContent>
    : {}

type Fieldify<TContent extends Record<any, Formatter>> = {
  [Key in keyof TContent]: TContent[Key]["value"];
}

type FallbackType<TConfigs extends Configs> = 
  TConfigs extends {fallback: infer Fallback} 
    ? Fallback 
    : undefined

function OBJECT<TContent extends Content, TConfigs extends Configs>(content: TContent, options: Options<TConfigs> = {} as Options<TConfigs>) {
  type Return = ReturnType<TContent, TConfigs>


  const name = "Object";
  const {strict} = options;
  const typeNames = ["Object"];


  return formatterify<TConfigs, Record<any, unknown>, Return>({name, options, typeNames}, 
    (unformatted, {INVALID}) => {
      const copy: Record<any, unknown> = {};
      

      for (let [key, formatter] of Object.entries(content)) {
        const formatted = formatter(unformatted[key], strict ? {strict} : undefined);

        if (copy[key] === INVALID) {
          throw formatter.error(unformatted[key]);
        }

        copy[key] = formatted;
      }
  

      return copy as Return;
    }
  );
}


export default OBJECT;