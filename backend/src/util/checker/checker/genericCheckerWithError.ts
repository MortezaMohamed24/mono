import {INVALID} from "../constants.js";
import {Checkable} from "../type/index.js";


const GenericCheckerWithError = <DefaultReturn = unknown>(checkable: Checkable, error: Function) => (
  <Return = DefaultReturn>(value: unknown) => {
    const output = checkable.check(value);

    if (output === INVALID) {
      throw error();
    }

    return output as Return;
  }
);


export default GenericCheckerWithError;