import {INVALID} from "../../constants";
import FactoryConfigs from "./factoryConfigs";


type FormatterReturnType<TConfigs extends FactoryConfigs> = 
  TConfigs["strict"] extends true
    ? TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? true
        : true
      : TConfigs["optional"] extends true
        ? TConfigs["formatted"] | FallbackType<TConfigs>
        : TConfigs["formatted"]
    : TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? boolean
        : boolean
      : TConfigs["optional"] extends true
        ? INVALID | TConfigs["formatted"] | FallbackType<TConfigs>
        : INVALID | TConfigs["formatted"]


type FallbackType<TConfigs extends FactoryConfigs> = 
  unknown extends TConfigs["fallback"] 
    ? undefined 
    : TConfigs["formatted"]


export default FormatterReturnType;