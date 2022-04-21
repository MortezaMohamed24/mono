import {STRING} from "/util/checker";
import {FILTER} from "../constants";
import {ChecklistBase} from "/checklists/entity";


const filter = STRING<ChecklistBase["filter"]>({
  case: "upper",
  trim: "both",
  pattern: RegExp(FILTER, "u"),
});


export default filter;