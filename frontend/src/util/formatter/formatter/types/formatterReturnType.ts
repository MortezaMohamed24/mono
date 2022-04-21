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
        ? INVALID | FormattedType<TConfigs> | FallbackType<TConfigs>
        : INVALID | FormattedType<TConfigs>

type FallbackType<TConfigs extends FactoryConfigs> = 
  TConfigs extends {fallback: infer Fallback} 
    ? Fallback 
    : undefined

type FormattedType<TConfigs extends FactoryConfigs> = 
  TConfigs extends {formatted: infer Formatted} 
    ? Formatted 
    : unknown


export default FormatterReturnType;