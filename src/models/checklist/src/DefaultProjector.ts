import {ChecklistProjector} from "./Projector.js"
import {checkitemProjectorDefault} from "checkitem/DefaultProjector.js"


export const DEFAULT_PROJECTOR = Object.freeze<ChecklistProjector>({
  keys: ["id", "title", "filter", "idUser", "idList", "idCard", "idBoard"],
  checkitems: checkitemProjectorDefault,
})


export default DEFAULT_PROJECTOR