import {Or} from "#util/checker";
import {OID} from "#util/checker";
import {title} from "src/models/card/fields/checkables";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {UNDEFINED} from "#util/checker";
import {description} from "src/models/card/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  id: Or([OID({}), UNDEFINED({})]),
  title: title,
  idList: OID({}),
  idLabels: ARRAY([OID({})]),
  description: description,
});


export default bodyCheckable;