import ListProjector from "./Projector.js"
import {DEFAULT_CARD_PROJECTOR} from "card/dist/DefaultProjector.js"


export const DEFAULT_LIST_PROJECTOR = Object.freeze<ListProjector>({
  keys: ["id", "title", "idUser", "idBoard", "idCards", "isWatched", "sortMethod"],
  cards: DEFAULT_CARD_PROJECTOR,
})


export default DEFAULT_LIST_PROJECTOR