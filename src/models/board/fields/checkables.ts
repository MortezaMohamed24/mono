import {THEME} from "./constants.js";
import {STRING} from "#util/checker";
import {BOOLEAN} from "#util/checker";
import {MIN_TITLE_LENGTH} from "./constants.js";
import {MAX_TITLE_LENGTH} from "./constants.js";


export const title = STRING({
  min: MIN_TITLE_LENGTH,
  max: MAX_TITLE_LENGTH,
  trim: "both",
  escape: "html",
  compact: true,
});

export const theme = STRING({
  case: "lower",
  trim: "both",
  pattern: THEME,
});

export const isStarred = BOOLEAN({});


export default Object.freeze({title, theme, isStarred});