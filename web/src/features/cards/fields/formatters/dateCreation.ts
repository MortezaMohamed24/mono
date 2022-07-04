import {NUMBER} from "/util/formatter";
import {MIN_DATE} from "../constants";


const dateCreation = NUMBER({
  min: MIN_DATE,
  name: "Card.dateCreation",
  finite: true,
});


export default dateCreation;