import {Or} from "/util/checker";
import {NULL} from "/util/checker";
import {STRING} from "/util/checker";
import {MIN_DESCRIPTION_LENGTH} from "../constants";
import {MAX_DESCRIPTION_LENGTH} from "../constants";


export const description = Or([
  NULL(),
  STRING({
    min: MIN_DESCRIPTION_LENGTH,
    max: MAX_DESCRIPTION_LENGTH,
    escape: "html",
  }),
]);


export default description;