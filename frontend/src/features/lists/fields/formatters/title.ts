import {STRING} from "/util/checker";
import {ListBase} from "/lists/entity";
import {MAX_TITLE_LENGTH} from "../constants";
import {MIN_TITLE_LENGTH} from "../constants";


const title = STRING<ListBase["title"]>({
  min: MIN_TITLE_LENGTH,
  max: MAX_TITLE_LENGTH,
  trim: "both",
  escape: "html",
  compact: true,
});


export default title;