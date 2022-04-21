import {TypeName} from "../typeName";
import {CheckableValueChecker} from "../checkable";


type TypeFactoryArgument<
  ValueCheckerArgument extends unknown = unknown,
  ValueCheckerOptions extends unknown = undefined,
  ValueCheckerReturn extends unknown = unknown,
> = {
  checker: CheckableValueChecker<ValueCheckerArgument, ValueCheckerOptions, ValueCheckerReturn>;
  typeName: TypeName | TypeName[];
}


export default TypeFactoryArgument;