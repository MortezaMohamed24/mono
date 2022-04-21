import {Or} from "#util/checker";
import {NULL} from "#util/checker";
import {FINITE} from "#util/checker";
import {STRING} from "#util/checker";
import {BOOLEAN} from "#util/checker";
import {MIN_DATE} from "./constants.js";
import {MAX_DATE} from "./constants.js";
import {MIN_TITLE_LENGTH} from "./constants.js";
import {MAX_TITLE_LENGTH} from "./constants.js";
import {MIN_DESCRIPTION_LENGTH} from "./constants.js";
import {MAX_DESCRIPTION_LENGTH} from "./constants.js";


export const date = Or([
  NULL({}),
  FINITE({max: MAX_DATE, min: MIN_DATE}),
]);

export const title = STRING({
  max: MAX_TITLE_LENGTH,
  min: MIN_TITLE_LENGTH,
  trim: "both",
  escape: "html",
  compact: true,
});

export const isWatched = BOOLEAN({});
export const isComplete = BOOLEAN({});

export const description = Or([
  NULL({}),
  STRING({
    max: MAX_DESCRIPTION_LENGTH,
    min: MIN_DESCRIPTION_LENGTH,
    trim: "both",
    escape: "html",
    compact: true,
  }),
]);

export const dateCreation = FINITE({min: 0});
export const dateLastView = FINITE({min: 0});


export default Object.freeze({
  date,
  title,
  isWatched,
  isComplete,
  description,
  dateCreation,
  dateLastView,
});