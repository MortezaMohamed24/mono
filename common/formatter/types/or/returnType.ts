import Configs from "./configs";
import {INVALID} from "../../constants";


type ReturnType<TConfigs extends Configs> =
  TConfigs["strict"] extends true
    ? TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? true
        : true
      : TConfigs["optional"] extends true
        ? TConfigs["or"][number]["value"] | FallbackType<TConfigs> 
        : TConfigs["or"][number]["value"]
    : TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? boolean
        : boolean
      : TConfigs["optional"] extends true
        ? TConfigs["or"][number]["value"] | FallbackType<TConfigs> | INVALID 
        : TConfigs["or"][number]["value"]


type FallbackType<TConfigs extends Configs> = 
  unknown extends TConfigs["fallback"]
    ? undefined
    : TConfigs["fallback"]


export default ReturnType;