import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {STRING} from "/util/formatter";
import {MIN_DESCRIPTION_LENGTH} from "../constants";
import {MAX_DESCRIPTION_LENGTH} from "../constants";


export const description = OR([
  NULL(),
  STRING({
    min: MIN_DESCRIPTION_LENGTH,
    max: MAX_DESCRIPTION_LENGTH,
    escape: "html",
  }),
], {
  name: "Card/description",
});


export default description;