import BoardProjectorType from "./Projector.js"
import {listProjectorDefault} from "src/models/list/methods/project"
import {labelProjectorDefault} from "src/models/label/methods/project"


const boardProjectorDefault = Object.freeze<BoardProjectorType>({
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
})


export default boardProjectorDefault