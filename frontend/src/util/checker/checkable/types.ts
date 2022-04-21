import {INVALID} from "../constants";
import {TypeName} from "../types";


export type CheckableFactoryArgument<
  ValueCheckerArgument extends unknown,
  ValueCheckerOptions extends unknown = undefined,
  ValueCheckerReturn extends unknown = unknown,
  ValueOptionality extends boolean = false,
  ValueFallback extends unknown = unknown,
> = {
  checker: CheckableValueChecker<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn>;
  options: ValueCheckerOptions;
  fallback: ValueFallback;
  typeName: TypeName | TypeName[];
  isOptional: ValueOptionality;
}

export type CheckableValueChecker<
  ValueCheckerArgument extends unknown = unknown,
  ValueCheckerOptions extends unknown = undefined,
  ValueCheckerReturn extends unknown = unknown,
> = 
  ValueCheckerOptions extends undefined 
    ? (value: ValueCheckerArgument, INVALID: INVALID, options?: ValueCheckerOptions) => INVALID | ValueCheckerReturn
    : (value: ValueCheckerArgument, INVALID: INVALID, options: ValueCheckerOptions) => INVALID | ValueCheckerReturn

export type Checkable<
  ValueCheckerArgument extends unknown = unknown,
  ValueCheckerOptions extends unknown = undefined,
  ValueCheckerReturn extends unknown = unknown,
  ValueOptionality extends boolean = false,
  CheckableReturn extends ValueCheckerReturn = ValueCheckerReturn,
  ValueFallback extends unknown = unknown,
> = {
  (value: unknown): ValueOptionality extends true
    ? CheckableReturn | INVALID | ValueFallback
    : CheckableReturn | INVALID
    
  optional<T extends ValueFallback>(fallback: T): Checkable<
    ValueCheckerArgument,
    ValueCheckerOptions,
    ValueCheckerReturn,
    true,
    CheckableReturn,
    ValueFallback
  >

  required(): Checkable<
    ValueCheckerArgument,
    ValueCheckerOptions,
    ValueCheckerReturn,
    false,
    CheckableReturn,
    undefined
  >
}

export type CheckableReturn<_Checkable extends Checkable> = ReturnType<_Checkable>;

export type CheckableReturnWithoutStatus<_Checkable extends Checkable> = Exclude<ReturnType<_Checkable>, INVALID>;