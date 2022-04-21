import Type from "../type";
import {INVALID} from "../constants";


type Elements = ((value: unknown) => unknown | INVALID)[]


const ARRAY = Type<unknown[], Elements, unknown[]>({
  checker: (v, INVALID, elems) => {
    const copy: unknown[] = [];
    
    outer: for (let item of v) {
      for (let checkable of elems) {
        const output = checkable(item);
        
        if (output !== INVALID) {
          copy.push(output);
          continue outer;
        }
      }
      
      return INVALID;
    }
    
    return copy;
  },
  typeName: ["Array"],
});


export default ARRAY;