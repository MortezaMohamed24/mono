import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {username} from "src/models/user/fields/checkables";
import {initials} from "src/models/user/fields/checkables";
import {password} from "src/models/user/fields/checkables";
import {lastname} from "src/models/user/fields/checkables";
import {firstname} from "src/models/user/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  username: username.opt(undefined),
  password: password.opt(undefined),
  initials: initials.opt(undefined),
  lastname: lastname.opt(undefined),
  firstname: firstname.opt(undefined),
});


export default bodyCheckable;