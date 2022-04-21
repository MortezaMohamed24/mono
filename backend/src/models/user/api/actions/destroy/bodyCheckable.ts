import {Or} from "#util/checker";
import {NULL} from "#util/checker";
import {OBJECT} from "#util/checker";
import BodyType from "./bodyType.js";
import {UNDEFINED} from "#util/checker";


const bodyCheckable = Or<BodyType>([
  NULL({}),
  OBJECT({}),
  UNDEFINED({}),
]);


export default bodyCheckable;