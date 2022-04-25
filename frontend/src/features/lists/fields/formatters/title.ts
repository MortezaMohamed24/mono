import {STRING} from "/util/formatter";
import {MAX_TITLE_LENGTH} from "../constants";
import {MIN_TITLE_LENGTH} from "../constants";


const title = STRING({
  min: MIN_TITLE_LENGTH,
  max: MAX_TITLE_LENGTH,
  trim: "both",
  name: "List.title",
  escape: "html",
  compact: true,
});


export default title;