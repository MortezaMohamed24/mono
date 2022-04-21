import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";


const dateCreation = OR({
  name: "BoardEntity/DateCreation",
  or: [
    NULL({
      name: "BoardEntity/DateCreation/NotDefined",
    }),
    NUMBER({
      min: MIN_DATE,
      nan: false,
      name: "BoardEntity/DateCreation/Defined",
      finite: true,
    }),
  ]
});


export default dateCreation;