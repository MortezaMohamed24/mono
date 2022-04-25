import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";


const dateLastActivity = OR([
  NULL(),
  NUMBER({min: MIN_DATE, finite: true}),
], {
  name: "Board.dateLasyActivity",
});


export default dateLastActivity;