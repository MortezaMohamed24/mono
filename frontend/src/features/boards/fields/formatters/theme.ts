import {THEME} from "../constants";
import {STRING} from "/util/formatter";
import {BoardNative} from "/boards/entity/native";


const theme = STRING({
  case: "lower",
  trim: "both",
  name: "BoardEntity/Theme",
  type: "" as BoardNative["theme"],
  pattern: RegExp(THEME, "u"),
  compact: true,
});


export default theme;