import {KEY} from "#models/checkitem/fields/constants";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import {STRING} from "#util/checker";


const projectorCheckable = OBJECT({
  keys: ARRAY([
    STRING({trim: "both", pattern: KEY}),
  ]),
});


export default projectorCheckable;