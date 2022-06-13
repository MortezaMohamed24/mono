import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {sortMethod} from "src/models/list/fields/formatters";


const bodyCheckable = OBJECT<BodyType>({
  idList: OID({}),
  sortMethod: sortMethod,
});


export default bodyCheckable;