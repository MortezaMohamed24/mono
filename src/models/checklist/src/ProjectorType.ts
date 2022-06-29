import {KEY} from "./constants.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {ChecklistProjectorType} from "./Projector.js"
import {checkitemProjectorCheckable} from "checkitem/ProjectorType.js"


const checklistProjectorCheckable = OBJECT<ChecklistProjectorType>({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  checkitems: checkitemProjectorCheckable,
})


export default checklistProjectorCheckable