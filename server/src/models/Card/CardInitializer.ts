import {Card} from "./Card.js"


export type CardInitializer = {
  title: Card["title"]
  dateDue: Card["dateDue"]
  idLabels: Card["idLabels"]
  dateStart: Card["dateStart"]
  isWatched: Card["isWatched"]
  isComplete: Card["isComplete"]
  description: Card["description"]
  dateCreation: Card["dateCreation"]
  dateLastView: Card["dateLastView"]
}


export default CardInitializer