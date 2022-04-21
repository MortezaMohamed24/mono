import {STRING} from "#util/checker";
import {BOOLEAN} from "#util/checker";
import {SORT_METHOD} from "./constants.js";
import {MIN_TITLE_LENGTH} from "./constants.js";
import {MAX_TITLE_LENGTH} from "./constants.js";


export const title = STRING({
  min: MIN_TITLE_LENGTH,
  max: MAX_TITLE_LENGTH,
  trim: "both",
  escape: "html",
  compact: true,
});

export const isWatched = BOOLEAN({});

export const sortMethod = STRING({
  trim: "both",
  case: "upper",
  pattern: SORT_METHOD,
});


export default Object.freeze({title, isWatched, sortMethod});