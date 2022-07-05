import {STRING} from "/util/formatter";
import {INITIALS} from "../constants"; 
import {MIN_INITIALS_LENGTH} from "../constants"; 
import {MAX_INITIALS_LENGTH} from "../constants"; 


const initials = STRING({
  min: MIN_INITIALS_LENGTH,
  max: MAX_INITIALS_LENGTH,
  trim: "both",
  case: "upper",
  name: "User.initials",
  pattern: new RegExp(INITIALS, "u"),
});


export default initials;