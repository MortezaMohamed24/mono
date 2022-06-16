import {STRING} from "/util/formatter";
import {MIN_TITLE_LENGTH} from "../constants";
import {MAX_TITLE_LENGTH} from "../constants";


const title = STRING({
  max: MAX_TITLE_LENGTH,
  min: MIN_TITLE_LENGTH,
  trim: "both",
  name: "Card.title",
  escape: "html",
  compact: true,
});


export default title;