import {STRING} from "/util/formatter";
import {USERNAME} from "../constants"; 
import {MIN_USERNAME_LENGTH} from "../constants"; 
import {MAX_USERNAME_LENGTH} from "../constants"; 


const username = STRING({
  min: MIN_USERNAME_LENGTH,
  max: MAX_USERNAME_LENGTH,
  trim: "both",
  name: "User.username",
  pattern: new RegExp(USERNAME, "u"),
});


export default username;