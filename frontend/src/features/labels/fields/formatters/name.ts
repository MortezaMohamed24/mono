import {Or} from "/util/checker";
import {NULL} from "/util/checker";
import {STRING} from "/util/checker";
import {MAX_NAME_LENGTH} from "../constants";
import {MIN_NAME_LENGTH} from "../constants";


const name = Or([
  NULL(),
  STRING({
    min: MIN_NAME_LENGTH,
    max: MAX_NAME_LENGTH,
    case: "lower",
    trim: "both",
    escape: "html",
    compact: true,
  }),
]);


export default name;