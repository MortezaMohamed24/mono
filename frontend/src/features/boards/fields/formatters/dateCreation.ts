import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";


const dateCreation = OR([
  NULL(),
  NUMBER({
    min: MIN_DATE,
    nan: false,
    finite: true,
  }),
], {
  name: "Board/dateCreation",
});


export default dateCreation;