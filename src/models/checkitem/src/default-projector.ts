import CheckitemProjectorType from "./Projector.js"


export const DEFAULT_PROJECTOR = Object.freeze({
  keys: Object.freeze([
    "id", 
    "idUser", 
    "idList", 
    "idCard", 
    "idBoard", 
    "content", 
    "isComplete", 
    "idChecklist",
  ]),
}) as CheckitemProjectorType


export default DEFAULT_PROJECTOR