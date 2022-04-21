import {Or} from "/util/checker";
import {NULL} from "/util/checker";
import {FINITE} from "/util/checker";
import {MIN_DATE} from "../constants";
import {MAX_DATE} from "../constants";


const dateDue = Or([
  NULL(),
  FINITE({
    min: MIN_DATE,
    max: MAX_DATE,
  }),
]);


export default dateDue;