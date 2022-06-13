import {KEY} from "src/models/card/fields/constants";
import {ARRAY} from "#util/checker";
import {STRING} from "#util/checker";
import {OBJECT} from "#util/checker";
import CardProjectorType from "./projectorType.js";
import {checklistProjectorCheckable} from "src/models/checklist/methods/project";
import {checkitemProjectorCheckable} from "src/models/checkitem/methods/project";


const cardProjectorCheckable = OBJECT<CardProjectorType>({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  checklists: checklistProjectorCheckable.opt(undefined),
  checkitems: checkitemProjectorCheckable.opt(undefined),
});


export default cardProjectorCheckable;