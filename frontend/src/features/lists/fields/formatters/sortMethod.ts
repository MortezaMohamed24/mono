import {STRING} from "/util/checker";
import {ListBase} from "../../entity";
import {SORT_METHOD} from "../constants";


const sortMethod = STRING<ListBase["sortMethod"]>({
  case: "upper",
  trim: "both",
  pattern: RegExp(SORT_METHOD, "u"),
});


export default sortMethod;