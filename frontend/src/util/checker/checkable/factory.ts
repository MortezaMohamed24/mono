import {INVALID} from "../constants";
import {Checkable} from "./types";
import TypeNameChecker from "../typeName";
import {CheckableFactoryArgument} from "./types";



function CheckableFactory<
  ValueCheckerArgument extends unknown,
  ValueCheckerOptions extends unknown,
  ValueCheckerReturn extends unknown,
  ValueOptionality extends false,
  CheckableReturn extends ValueCheckerReturn,
  ValueFallback extends undefined,
>(factoryOptions: CheckableFactoryArgument<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, ValueOptionality, ValueFallback>): (
  Checkable<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, ValueOptionality, CheckableReturn, ValueFallback>
);

function CheckableFactory<
  ValueCheckerArgument extends unknown,
  ValueCheckerOptions extends unknown,
  ValueCheckerReturn extends unknown,
  ValueOptionality extends true,
  CheckableReturn extends ValueCheckerReturn,
  ValueFallback extends unknown,
>(factoryOptions: CheckableFactoryArgument<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, ValueOptionality, ValueFallback>): (
  Checkable<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, ValueOptionality, CheckableReturn, ValueFallback>
);

function CheckableFactory<
  ValueCheckerArgument extends unknown,
  ValueCheckerOptions extends unknown,
  ValueCheckerReturn extends unknown,
  ValueOptionality extends boolean,
  CheckableReturn extends ValueCheckerReturn,
  ValueFallback extends unknown,
>({
  checker, 
  options, 
  fallback, 
  typeName, 
  isOptional,
}: CheckableFactoryArgument<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, ValueOptionality, ValueFallback>): (
  Checkable<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, boolean, CheckableReturn, ValueFallback> 
) {
  const checkValueType =  checker;
  const checkValueTypeName = TypeNameChecker(typeName);


  function checkable(value: unknown) {
    if (checkValueTypeName(value)) {
      return checkValueType(value as any, INVALID, options) as CheckableReturn;
    } else if (value !== undefined) {
      return INVALID;
    } else if (isOptional) {
      return fallback;
    } else {
      return INVALID;
    }
  }

  checkable.required = () => (
    CheckableFactory<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, false, CheckableReturn, undefined>({
      checker: checker,
      options: options,
      fallback: undefined,
      typeName: typeName,
      isOptional: false,
    })
  );

  checkable.optional = <T extends ValueFallback>(fallback: T) => (
    CheckableFactory<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, true, CheckableReturn, T>({
      checker: checker,
      options: options,
      fallback: fallback,
      typeName: typeName,
      isOptional: true,
    })
  );


  return checkable;
};


export default CheckableFactory;