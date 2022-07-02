import BoardProjector from "./Projector.js"
import {DEFAULT_LIST_PROJECTOR} from "list/DefaultProjector.js"
import {DEFAULT_LABEL_PROJECTOR} from "label/DefaultProjector.js"


const DEFAULT_BOARD_PROJECTOR = Object.freeze<BoardProjector>({
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
  lists: DEFAULT_LIST_PROJECTOR,  
  labels: DEFAULT_LABEL_PROJECTOR,
})


export {DEFAULT_BOARD_PROJECTOR}
export default DEFAULT_BOARD_PROJECTOR