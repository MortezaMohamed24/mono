import {Or} from "#util/checker";
import {OID} from "#util/checker";
import {name} from "src/models/label/fields/checkables";
import {color} from "src/models/label/fields/checkables";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {UNDEFINED} from "#util/checker";


const bodyCheckable = OBJECT<BodyType>({
  id: Or([OID({}), UNDEFINED({})]),
  name: name,
  color: color,
  idBoard: OID({}),
});


export default bodyCheckable;