import {KEY} from "src/models/user/fields/constants";
import {ARRAY} from "#util/checker";
import {OBJECT} from "#util/checker";
import {STRING} from "#util/checker";
import {UserProjectorType} from "./ProjectorType.js";
import {listProjectorCheckable} from "src/models/list/methods/project";
import {cardProjectorCheckable} from "src/models/card/methods/project";
import {boardProjectorCheckable} from "src/models/board/methods/project";
import {labelProjectorCheckable} from "src/models/label/methods/project";
import {checklistProjectorCheckable} from "src/models/checklist/methods/project";
import {checkitemProjectorCheckable} from "src/models/checkitem/methods/project";


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