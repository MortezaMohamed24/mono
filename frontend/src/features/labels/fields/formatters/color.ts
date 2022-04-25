import {COLOR} from "../constants";
import {STRING} from "/util/formatter";
import {LabelBase} from "/features/labels/entity";


const color = STRING<LabelBase["color"]>({
  case: "lower",
  trim: "both",
  name: "Label.color",
  pattern: RegExp(COLOR, "u"),
});


export default color;