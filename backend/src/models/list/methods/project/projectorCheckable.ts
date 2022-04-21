import {KEY} from "#models/list/fields/constants";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import {STRING} from "#util/checker";
import ListProjectorType from "./projectorType.js";
import {cardProjectorCheckable} from "#models/card/methods/project";
import {checklistProjectorCheckable} from "#models/checklist/methods/project";
import {checkitemProjectorCheckable} from "#models/checkitem/methods/project";


const listProjectorCheckable = OBJECT<ListProjectorType>({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  cards: cardProjectorCheckable.opt(undefined),
  checklists: checklistProjectorCheckable.opt(undefined),
  checkitems: checkitemProjectorCheckable.opt(undefined),
});


export default listProjectorCheckable;