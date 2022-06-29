import ListProjectorType from "./Projector.js";
import {cardProjectorDefault} from "src/models/card/methods/project";


const listProjectorDefault: ListProjectorType = Object.freeze({
  keys: ["id", "title", "idUser", "idBoard", "idCards", "isWatched", "sortMethod"],
  cards: cardProjectorDefault,
});


export default listProjectorDefault;