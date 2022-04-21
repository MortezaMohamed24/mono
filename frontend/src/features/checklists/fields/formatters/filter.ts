import {STRING} from "/util/formatter";
import {FILTER} from "../constants";
import {ChecklistBase} from "/checklists/entity";


const filter = STRING({
  case: "upper",
  trim: "both",
  type: "" as ChecklistBase["filter"],
  pattern: RegExp(FILTER, "u"),
});


export default filter;