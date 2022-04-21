import {STRING} from "/util/formatter";
import {ListBase} from "../../entity";
import {SORT_METHOD} from "../constants";


const sortMethod = STRING({
  case: "upper",
  trim: "both",
  type: "" as ListBase["sortMethod"],
  name: "List/sortMethod",
  pattern: RegExp(SORT_METHOD, "u"),
});


export default sortMethod;