import {STRING} from "#util/checker";
import {FILTER} from "./constants.js";
import {MIN_TITLE_LENGTH} from "./constants.js";
import {MAX_TITLE_LENGTH} from "./constants.js";


export const title = STRING({
  max: MAX_TITLE_LENGTH,
  min: MIN_TITLE_LENGTH,
  trim: "both",
  escape: "html",
  compact: true,
});

export const filter = STRING({
  trim: "both",
  case: "upper",
  pattern: FILTER,
});


export default Object.freeze({title, filter});