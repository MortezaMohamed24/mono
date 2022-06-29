import {CheckitemProjector} from "./Projector.js"


export const DEFAULT_PROJECTOR = Object.freeze<CheckitemProjector>({
  keys: [
    "id", 
    "idUser", 
    "idList", 
    "idCard", 
    "idBoard", 
    "content", 
    "isComplete", 
    "idChecklist",
  ],
})


export default DEFAULT_PROJECTOR