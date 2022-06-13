import {OID} from "#util/checker";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";


const bodyCheckable = OBJECT<BodyType>({
  idCard: OID({}),
  idLabels: ARRAY([OID({})]),
});
  

export default bodyCheckable;