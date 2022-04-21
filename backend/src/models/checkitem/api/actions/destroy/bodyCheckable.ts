import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";


const bodyCheckable = OBJECT<BodyType>({
  idCheckitem: OID({}),
});


export default bodyCheckable; 