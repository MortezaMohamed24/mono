import {STRING} from "/util/formatter";
import {CheckitemBase} from "../../entity";
import {MAX_CONTENT_LENGTH} from "../constants";
import {MIN_CONTENT_LENGTH} from "../constants";


const content = STRING({
  min: MIN_CONTENT_LENGTH,
  max: MAX_CONTENT_LENGTH,
  type: "" as CheckitemBase["content"],
  trim: "both",
  name: "Checkitem/content",
  escape: "html",
  compact: true,
});


export default content;