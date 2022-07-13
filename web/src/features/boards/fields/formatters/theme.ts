import {THEME} from "../constants"
import {STRING} from "/util/formatter"
import {BoardNative} from "/features/boards/entity/native"


const theme = STRING<BoardNative["theme"]>({
  case: "lower",
  trim: "both",
  name: "Board.theme",
  pattern: RegExp(THEME, "u"),
  compact: true,
})


export default theme