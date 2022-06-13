import {Or} from "#util/checker";
import {NULL} from "#util/checker";
import {COLOR} from "./constants.js";
import {STRING} from "#util/checker";
import {MAX_NAME_LENGTH} from "./constants.js";
import {MIN_NAME_LENGTH} from "./constants.js";


export const name = Or([
  STRING({
    min: MIN_NAME_LENGTH,
    max: MAX_NAME_LENGTH,
    trim: "both",
    escape: "html",
    compact: true,
  }),
  NULL({}),
]);

export const color = STRING({
  case: "lower",
  trim: "both",
  pattern: COLOR,
});


export default Object.freeze({name, color});