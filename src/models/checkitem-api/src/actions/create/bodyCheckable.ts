import {Or} from "#util/checker";
import {OID} from "#util/checker";
import BodyType from "./bodyType.js";
import {OBJECT} from "#util/checker";
import {content} from "src/models/checkitem/fields/checkables";
import {UNDEFINED} from "#util/checker";


const bodyCheckable = OBJECT<BodyType>({
  id: Or([OID({}), UNDEFINED({})]),
  content: content,
  idChecklist: OID({}),
});


export default bodyCheckable;