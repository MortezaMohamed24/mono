import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";


const dateLastActivity = OR({
  name: "BoardEntity/DateLasyActivity",
  or: [
    NULL({
      name: "Boardentity/DateLastActivity/NotDefined",
    }),
    NUMBER({
      min: MIN_DATE,
      name: "Boardentity/DateLastActivity/Defined",
      finite: true,
    }),
  ]
});


export default dateLastActivity;