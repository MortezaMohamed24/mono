import {CardProjector} from "./Projector.js"
import {checklistProjectorDefault} from "src/models/checklist/methods/project"


const projectorDefault: CardProjector = Object.freeze({
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
  checklists: checklistProjectorDefault,
})


export default projectorDefault