import Configs from "./configs";
import {INVALID} from "../../constants";


type ReturnType<TConfigs extends Configs> =
  TConfigs["content"] extends any[]
    ? TConfigs["strict"] extends true
      ? TConfigs["boolean"] extends true
        ? TConfigs["optional"] extends true
          ? true
          : true
        : TConfigs["optional"] extends true
          ? TConfigs["content"][number]["value"][] | TConfigs["fallback"] 
          : TConfigs["content"][number]["value"][]
      : TConfigs["boolean"] extends true
        ? TConfigs["optional"] extends true
          ? boolean
          : boolean
        : TConfigs["optional"] extends true
          ? TConfigs["content"][number]["value"][] | TConfigs["fallback"] | INVALID 
          : TConfigs["content"][number]["value"][]
    : []


export default ReturnType;