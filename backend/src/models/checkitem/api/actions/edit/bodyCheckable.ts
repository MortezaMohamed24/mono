import {OID} from "#util/checker";
import BodyType from "./bodyType.js";
import {OBJECT} from "#util/checker";
import {content} from "#models/checkitem/fields/checkables";
import {isComplete} from "#models/checkitem/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  content: content.opt(undefined),
  isComplete: isComplete.opt(undefined),
  idCheckitem: OID({}),
});


export default bodyCheckable;