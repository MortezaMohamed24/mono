import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";
import {MAX_DATE} from "../constants";


const dateStart = OR([
  NULL(),
  NUMBER({
    min: MIN_DATE,
    max: MAX_DATE,
  }),
], {
  name: "Card.dateStart",
});


export default dateStart;