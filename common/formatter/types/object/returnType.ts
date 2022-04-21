import Configs from "./configs";
import {INVALID} from "../../constants";
import {Formatter} from "../../formatter";


type ReturnType<TConfigs extends Configs> = 
  TConfigs["content"] extends object
    ? TConfigs["strict"] extends true
      ? TConfigs["boolean"] extends true 
        ? TConfigs["optional"] extends true
          ? true
          : true
        : TConfigs["optional"] extends true
          ? Fieldify<TConfigs["content"]> | TConfigs["fallback"]
          : Fieldify<TConfigs["content"]>
      : TConfigs["boolean"] extends true 
        ? TConfigs["optional"] extends true
          ? boolean
          : boolean
        : TConfigs["optional"] extends true
          ? INVALID | Fieldify<TConfigs["content"]> | TConfigs["fallback"]
          : INVALID | Fieldify<TConfigs["content"]>
    : {}


type Fieldify<TContent extends Record<any, Formatter>> = {
  [Key in keyof TContent]: TContent[Key]["value"]
}


export default ReturnType;