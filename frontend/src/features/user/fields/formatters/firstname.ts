import {STRING} from "/util/checker";
import {FIRSTNAME} from "../constants"; 
import {MIN_FIRSTNAME_LENGTH} from "../constants"; 
import {MAX_FIRSTNAME_LENGTH} from "../constants";


const firstname = STRING({
  min: MIN_FIRSTNAME_LENGTH,
  max: MAX_FIRSTNAME_LENGTH,
  trim: "both",
  case: "capital",
  pattern: new RegExp(FIRSTNAME, "u"),
});


export default firstname;