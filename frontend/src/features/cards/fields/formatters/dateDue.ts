import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";
import {MAX_DATE} from "../constants";


const dateDue = OR([
  NULL(),
  NUMBER({
    min: MIN_DATE,
    max: MAX_DATE,
    finite: true,
  }),
], {
  name: "Card/dateDue",
});


export default dateDue;