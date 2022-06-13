import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";


const dateLastView = OR([
  NULL(),
  NUMBER({min: MIN_DATE, finite: true}),
], {
  name: "Board.dateLastView",
});


export default dateLastView;