import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {STRING} from "/util/formatter";
import {MAX_NAME_LENGTH} from "../constants";
import {MIN_NAME_LENGTH} from "../constants";


const name = OR([
  NULL(),
  STRING({
    min: MIN_NAME_LENGTH,
    max: MAX_NAME_LENGTH,
    case: "lower",
    trim: "both",
    escape: "html",
    compact: true,
  }),
], {
  name: "Label.name",
});


export default name;