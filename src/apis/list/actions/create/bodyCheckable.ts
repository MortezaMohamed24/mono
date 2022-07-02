import {Or} from "#util/checker";
import {OID} from "#util/checker";
import {title} from "src/models/list/fields/formatters";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {UNDEFINED} from "#util/checker";


const bodyCheckable = OBJECT<BodyType>({
  id: Or([OID({}), UNDEFINED({})]),
  title: title,
  idBoard: OID({}),
});


export default bodyCheckable;