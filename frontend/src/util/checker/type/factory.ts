import {Checkable} from "../checkable";
import CheckableFactory from "../checkable";
import TypeFactoryArgument from "./types";


/** 
 * The Type factory, which creates types. 
 * 
 * Types are factories that create checkables.
*/
const Type = <
  ValueCheckerArgument extends unknown,
  ValueCheckerOptions extends unknown,
  ValueCheckerReturn extends unknown,
>({checker, typeName}: TypeFactoryArgument<
  ValueCheckerArgument,
  ValueCheckerOptions,
  ValueCheckerReturn
>) => {
  type Type = ValueCheckerOptions extends undefined 
    ? (
        <CheckableReturn extends ValueCheckerReturn = ValueCheckerReturn>(options?: ValueCheckerOptions) => Checkable<
          ValueCheckerArgument, 
          ValueCheckerOptions, 
          ValueCheckerReturn, 
          false, 
          CheckableReturn, 
          undefined
        >
      )
    : (
        <CheckableReturn extends ValueCheckerReturn = ValueCheckerReturn>(options: ValueCheckerOptions) => Checkable<
          ValueCheckerArgument, 
          ValueCheckerOptions, 
          ValueCheckerReturn, 
          false, 
          CheckableReturn, 
          undefined
        >
      )


  const type = (<CheckableReturn extends ValueCheckerReturn = ValueCheckerReturn>(options: ValueCheckerOptions) => (
    CheckableFactory<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn, false, CheckableReturn, undefined>({
      checker: checker,
      options: options,
      fallback: undefined,
      typeName: typeName,
      isOptional: false,
    })
  )) as Type;


  return type;
};


export default Type;