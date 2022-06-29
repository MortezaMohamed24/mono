import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import {FINITE} from "#util/checker";
import BodyType from "./bodyType.js";


const bodyCheckable = OBJECT<BodyType>({
  index: FINITE({min: 0}),
  idList: OID({}),
  idBoard: OID({}),
});


export default bodyCheckable;