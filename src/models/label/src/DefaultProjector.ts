import {LabelProjector} from "./Projector.js"


export const DEFAULT_LABEL_PROJECTOR = Object.freeze<LabelProjector>({
  keys: [
    "id", 
    "name", 
    "color", 
    "idUser", 
    "idBoard",
  ],
})


export default DEFAULT_LABEL_PROJECTOR