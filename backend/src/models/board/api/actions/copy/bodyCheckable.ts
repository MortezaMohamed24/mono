import {OID} from "#util/checker";
import {title} from "#models/board/fields/checkables";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {BOOLEAN} from "#util/checker";


const bodyCheckable = OBJECT<BodyType>({
  title: title,
  idBoard: OID({}),
  keepCards: BOOLEAN({}).opt(true),
});


export default bodyCheckable;