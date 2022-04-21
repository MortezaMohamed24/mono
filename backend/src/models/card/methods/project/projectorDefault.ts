import CardProjectorType from "./projectorType.js";
import {checklistProjectorDefault} from "#models/checklist/methods/project";


const projectorDefault: CardProjectorType = Object.freeze({
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
});


export default projectorDefault;