import {STRING} from "/util/formatter";
import {LASTNAME} from "../constants"; 
import {MIN_LASTNAME_LENGTH} from "../constants"; 
import {MAX_LASTNAME_LENGTH} from "../constants"; 


const lastname = STRING({
  min: MIN_LASTNAME_LENGTH,
  max: MAX_LASTNAME_LENGTH,
  trim: "both",
  case: "capital",
  name: "User.lastname",
  pattern: new RegExp(LASTNAME, "u"),  
});


export default lastname;