import {STRING} from "/util/checker";
import {ChecklistBase} from "../../entity";
import {MIN_TITLE_LENGTH} from "../constants";
import {MAX_TITLE_LENGTH} from "../constants";


const title = STRING<ChecklistBase["title"]>({
  min: MIN_TITLE_LENGTH,
  max: MAX_TITLE_LENGTH,
  trim: "both",
  escape: "html",
  compact: true,
});


export default title;