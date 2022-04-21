import CardBase from "../../entity/base";
import {STRING} from "/util/checker";
import {MIN_TITLE_LENGTH} from "../constants";
import {MAX_TITLE_LENGTH} from "../constants";


const title = STRING<CardBase["title"]>({
  max: MAX_TITLE_LENGTH,
  min: MIN_TITLE_LENGTH,
  trim: "both",
  escape: "html",
  compact: true,
});


export default title;