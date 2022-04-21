import {COLOR} from "../constants";
import {STRING} from "/util/formatter";
import {LabelBase} from "/labels/entity";


const color = STRING({
  case: "lower",
  trim: "both",
  name: "Label/color",
  type: "" as LabelBase["color"],
  pattern: RegExp(COLOR, "u"),
});


export default color;