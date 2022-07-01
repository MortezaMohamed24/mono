import {CardProjector} from "./Projector.js"
import {CHECKLIST_DEFAULT_PROJECTOR} from "checklist/DefaultProjector.js"


const DEFAULT_CARD_PROJECTOR = Object.freeze<CardProjector>({
  keys: [
    "id", 
    "url", 
    "title", 
    "idUser", 
    "idList", 
    "idBoard", 
    "dateDue", 
    "idLabels", 
    "dateStart", 
    "isWatched", 
    "isComplete", 
    "description", 
    "idChecklists", 
    "dateCreation", 
    "dateLastView",
  ],
  checklists: CHECKLIST_DEFAULT_PROJECTOR,
})


export {DEFAULT_CARD_PROJECTOR}
export default DEFAULT_CARD_PROJECTOR