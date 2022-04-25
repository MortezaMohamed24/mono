import {STRING} from "/util/formatter";
import {PASSWORD} from "../constants"; 
import {MIN_PASSWORD_LENGTH} from "../constants"; 
import {MAX_PASSWORD_LENGTH} from "../constants"; 


const password = STRING({
  min: MIN_PASSWORD_LENGTH,
  max: MAX_PASSWORD_LENGTH,
  name: "User.password",
  pattern: new RegExp(PASSWORD, "u"),
});


export default password;