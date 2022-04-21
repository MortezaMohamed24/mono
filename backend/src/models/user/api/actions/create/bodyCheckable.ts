import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {username} from "#models/user/fields/checkables";
import {password} from "#models/user/fields/checkables";
import {lastname} from "#models/user/fields/checkables";
import {firstname} from "#models/user/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  username: username,
  password: password,
  lastname: lastname,
  firstname: firstname,
});


export default bodyCheckable;