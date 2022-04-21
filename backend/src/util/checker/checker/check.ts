import {INVALID} from "../constants.js";
import {Checkable} from "../type";


function check<Return = unknown>(checkable: Checkable, value: unknown) {
  return checkable.check(value) as Return | INVALID;
}


export default check;