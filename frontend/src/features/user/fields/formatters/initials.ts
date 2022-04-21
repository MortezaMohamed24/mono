import {STRING} from "/util/checker";
import {INITIALS} from "../constants"; 
import {MIN_INITIALS_LENGTH} from "../constants"; 
import {MAX_INITIALS_LENGTH} from "../constants"; 


const initials = STRING({
  min: MIN_INITIALS_LENGTH,
  max: MAX_INITIALS_LENGTH,
  trim: "both",
  case: "upper",
  pattern: new RegExp(INITIALS, "u"),
});


export default initials;