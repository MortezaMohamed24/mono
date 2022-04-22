import {THEME} from "../constants";
import {STRING} from "/util/formatter";
import {BoardNative} from "/features/boards/entity/native";


const theme = STRING({
  case: "lower",
  trim: "both",
  name: "Board/theme",
  type: "" as BoardNative["theme"],
  pattern: RegExp(THEME, "u"),
  compact: true,
});


export default theme;