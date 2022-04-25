import {STRING} from "/util/formatter";
import {ListBase} from "../../entity";
import {SORT_METHOD} from "../constants";


const sortMethod = STRING<ListBase["sortMethod"]>({
  case: "upper",
  trim: "both",
  name: "List.sortMethod",
  pattern: RegExp(SORT_METHOD, "u"),
});


export default sortMethod;