import {OID} from "#util/checker";
import {date} from "src/models/card/fields/checkables";
import {title} from "src/models/card/fields/checkables";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {BOOLEAN} from "#util/checker";
import {description} from "src/models/card/fields/checkables";


const bodyCheckable = OBJECT<BodyType>({
  title: title.opt(undefined),
  idCard: OID({}),
  dateDue: date.opt(undefined),
  dateStart: date.opt(undefined),
  isComplete: BOOLEAN({}).opt(undefined),
  description: description.opt(undefined),
});


export default bodyCheckable;