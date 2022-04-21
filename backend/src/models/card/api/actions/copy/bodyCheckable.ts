import {OID} from "#util/checker";
import {title} from "#models/card/fields/checkables";
import {OBJECT} from "#util/checker";
import {FINITE} from "#util/checker";
import BodyType from "./bodyType.js";
import {BOOLEAN} from "#util/checker";


const bodyCheckable = OBJECT<BodyType>({
  title: title.opt(undefined),
  index: FINITE({min: 0, max: Infinity}).opt(undefined),
  idCard: OID({}),
  idList: OID({}),
  keepDates: BOOLEAN({}).opt(undefined),
  keepLabels: BOOLEAN({}).opt(undefined),
  keepChecklists: BOOLEAN({}).opt(undefined),
});


export default bodyCheckable;