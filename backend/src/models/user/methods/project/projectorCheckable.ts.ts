import {KEY} from "#models/user/fields/constants";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import {STRING} from "#util/checker";
import {UserProjectorType} from "./projectorType.js";
import {listProjectorCheckable} from "#models/list/methods/project";
import {cardProjectorCheckable} from "#models/card/methods/project";
import {boardProjectorCheckable} from "#models/board/methods/project";
import {labelProjectorCheckable} from "#models/label/methods/project";
import {checklistProjectorCheckable} from "#models/checklist/methods/project";
import {checkitemProjectorCheckable} from "#models/checkitem/methods/project";


const userProjectorCheckable = OBJECT<UserProjectorType>({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  lists: listProjectorCheckable.opt(undefined),
  cards: cardProjectorCheckable.opt(undefined),
  boards: boardProjectorCheckable.opt(undefined),
  labels: labelProjectorCheckable.opt(undefined),
  checklists: checklistProjectorCheckable.opt(undefined),
  checkitems: checkitemProjectorCheckable.opt(undefined),
});


export default userProjectorCheckable;