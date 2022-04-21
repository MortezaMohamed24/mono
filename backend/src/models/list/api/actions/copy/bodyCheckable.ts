import {OID} from "#util/checker";
import {title} from "#models/list/fields/formatters";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";


const bodyCheckable = OBJECT<BodyType>({
  title: title.opt(undefined),
  idList: OID({}),
  idBoard: OID({}),
});


export default bodyCheckable;