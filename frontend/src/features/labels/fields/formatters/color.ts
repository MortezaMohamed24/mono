import {COLOR} from "../constants";
import {STRING} from "/util/checker";
import {LabelBase} from "/labels/entity";


const color = STRING<LabelBase["color"]>({
  case: "lower",
  trim: "both",
  pattern: RegExp(COLOR, "u"),
});


export default color;