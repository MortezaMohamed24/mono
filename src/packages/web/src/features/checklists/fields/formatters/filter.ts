import {STRING} from "/util/formatter";
import {FILTER} from "../constants";
import {ChecklistBase} from "/features/checklists/entity";


const filter = STRING<ChecklistBase["filter"]>({
  name: "Checklist.filter",
  case: "upper",
  trim: "both",
  pattern: RegExp(FILTER, "u"),
});


export default filter;