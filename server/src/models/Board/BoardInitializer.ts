import {Board} from "./Board.js"


export type BoardInitializer = {
  title: Board["title"]
  theme: Board["theme"]
  isStarred: Board["isStarred"]
  dateCreation: Board["dateCreation"]
  dateLastView: Board["dateLastView"]
  dateLastActivity: Board["dateLastActivity"]
}


export default BoardInitializer