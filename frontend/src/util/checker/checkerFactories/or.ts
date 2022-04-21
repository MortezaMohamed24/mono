import {INVALID} from "../constants";


const Or = <T extends (value: unknown) => unknown>(or: T[]) => (
  (value: unknown) => {
    for (let checkable of or) {
      const output = checkable(value);
  
      if (output !== INVALID) {
        // TypeScript refused to infer the return type of `checkable` 
        // until I wrote the `as Return...` type annonation 
        return output as ReturnType<T>;
      }
    }
  
    return INVALID;
  } 
);


export default Or;