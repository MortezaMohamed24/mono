import {INVALID} from "../constants";


const WithError = <T extends (value: unknown) => unknown>(checkable: T, error: (value: unknown) => void) => (
  (value: unknown) => {
    const output = checkable(value);

    if (output === INVALID) {
      throw error(value);
    }
    
    // TypeScript refused to infer the return type of `checkable` 
    // until I wrote the `as Return...` type annonation 
    return output as Exclude<ReturnType<T>, INVALID>;
  }
);


export default WithError;