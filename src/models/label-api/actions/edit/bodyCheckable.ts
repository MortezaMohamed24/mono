import {OID} from "#util/checker";
import {name} from "src/models/label/fields/checkables";
import {color} from "src/models/label/fields/checkables";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";


const bodyCheckable = OBJECT<BodyType>({
  name: name.opt(undefined),
  color: color.opt(undefined),
  idLabel: OID({}),
});


export default bodyCheckable;