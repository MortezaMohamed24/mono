import {ANY} from "../constants.js";
import {INVALID} from "../constants.js";


type Argument<Config extends BaseConfig> = {
  checker: ValueChecker<Config>;
  typeNames: TypeName[];
}

type BaseConfig = {
  value: unknown;
  return: unknown;
  options: object;
}

type TypeName = string | ANY

type ValueChecker<Config extends BaseConfig> = (
  value: Config["value"], 
  INVALID: INVALID, 
  options: Config["options"],
) => (
  | INVALID 
  | Config["return"]
)

type Checkable<Return = unknown> = {
  check(value: unknown): INVALID | Return;
}

type ReturnOfCheckable<_Checkable extends Checkable> = Exclude<ReturnType<_Checkable["check"]>, INVALID> 


export {
  Argument,
  BaseConfig,
  TypeName,
  ValueChecker,
  Checkable,
}