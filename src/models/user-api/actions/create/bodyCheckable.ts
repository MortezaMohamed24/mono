import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {username} from "src/models/user/fields/checkables";
import {password} from "src/models/user/fields/checkables";
import {lastname} from "src/models/user/fields/checkables";
import {firstname} from "src/models/user/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  username: username,
  password: password,
  lastname: lastname,
  firstname: firstname,
});


export default bodyCheckable;