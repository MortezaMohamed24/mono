import {OID} from "#util/checker";
import {title} from "#models/list/fields/formatters";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {isWatched} from "#models/list/fields/formatters";


const bodyCheckable = OBJECT<BodyType>({
  title: title.opt(undefined),
  idList: OID({}),
  isWatched: isWatched.opt(undefined),
});


export default bodyCheckable;