import {KEY} from "src/models/board/fields/constants";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import {STRING} from "#util/checker";
import BoardProjectorType from "./projectorType.js";
import {listProjectorCheckable} from "src/models/list/methods/project";
import {cardProjectorCheckable} from "src/models/card/methods/project";
import {labelProjectorCheckable} from "src/models/label/methods/project";
import {checklistProjectorCheckable} from "src/models/checklist/methods/project";
import {checkitemProjectorCheckable} from "src/models/checkitem/methods/project";


const boardProjectorCheckable = OBJECT<BoardProjectorType>({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  lists: listProjectorCheckable.opt(undefined),
  cards: cardProjectorCheckable.opt(undefined),
  labels: labelProjectorCheckable.opt(undefined),
  checklists: checklistProjectorCheckable.opt(undefined),
  checkitems: checkitemProjectorCheckable.opt(undefined),
});


export default boardProjectorCheckable;