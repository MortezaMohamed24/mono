import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {username} from "#models/user/fields/checkables";
import {initials} from "#models/user/fields/checkables";
import {password} from "#models/user/fields/checkables";
import {lastname} from "#models/user/fields/checkables";
import {firstname} from "#models/user/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  username: username.opt(undefined),
  password: password.opt(undefined),
  initials: initials.opt(undefined),
  lastname: lastname.opt(undefined),
  firstname: firstname.opt(undefined),
});


export default bodyCheckable;