import {OID} from "#util/checker";
import {title} from "#models/checklist/fields/checkables";
import {filter} from "#models/checklist/fields/checkables";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";


const bodyCheckable = OBJECT<BodyType>({
  title: title.opt(undefined),
  filter: filter.opt(undefined),
  idChecklist: OID({}),
});


export default bodyCheckable;