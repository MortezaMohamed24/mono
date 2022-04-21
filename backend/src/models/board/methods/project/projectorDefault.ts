import BoardProjectorType from "./projectorType.js";
import {listProjectorDefault} from "#models/list/methods/project";
import {labelProjectorDefault} from "#models/label/methods/project";


const boardProjectorDefault = Object.freeze({
  keys: [
    "id", 
    "url", 
    "title", 
    "theme", 
    "idUser", 
    "idLists", 
    "idLabels", 
    "isStarred", 
    "dateCreation", 
    "dateLastView", 
    "dateLastActivity", 
  ],

  lists: listProjectorDefault,
  
  labels: labelProjectorDefault,
} as BoardProjectorType);


export default boardProjectorDefault;