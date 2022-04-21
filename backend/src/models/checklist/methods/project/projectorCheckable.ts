import {KEY} from "#models/checklist/fields/constants";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import {STRING} from "#util/checker";
import ChecklistProjectorType from "./projectorType.js";
import {checkitemProjectorCheckable} from "#models/checkitem/methods/project";


const checklistProjectorCheckable = OBJECT<ChecklistProjectorType>({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  checkitems: checkitemProjectorCheckable,
});


export default checklistProjectorCheckable;