import {STRING} from "#util/checker";
import {BOOLEAN} from "#util/checker";
import {MIN_CONTENT_LENGTH} from "./constants.js";
import {MAX_CONTENT_LENGTH} from "./constants.js";


export const content = STRING({
  min: MIN_CONTENT_LENGTH, 
  max: MAX_CONTENT_LENGTH, 
  trim: "both", 
  escape: "html", 
  compact: true,
});

export const isComplete = BOOLEAN({});


export default Object.freeze({content, isComplete});