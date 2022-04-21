import {OR} from "/util/formatter";
import {NULL} from "/util/formatter";
import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";


const dateLastView = OR({
  name: "BoardEntity/DateLastView",
  or: [
    NULL({
      name: "BoardEntity/DateLastView/NotDefined",
    }),

    NUMBER({
      min: MIN_DATE,
      name: "BoardEntity/DateLastView/Defined",
      finite: true,
    }),
  ]
});


export default dateLastView;