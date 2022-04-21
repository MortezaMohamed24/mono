import {INVALID} from "../constants.js";
import {Checkable} from "../type/index.js";


const GenericChecker = <DefaultReturn = unknown>(checkable: Checkable) => (
  <Return = DefaultReturn>(value: unknown) => (
    checkable.check(value) as Return | INVALID
  )
);


export default GenericChecker;