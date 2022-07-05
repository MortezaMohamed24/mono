import {v4} from "uuid"
import {User} from "../User/User.js"
import {Card} from "../Card/Card.js"
import {Board} from "../Board/Board.js"
import {Label} from "../Label/Label.js"
import {Error} from "../../Error.js"
import {ListKey} from "./ListKey.js"
import {Checklist} from "../Checklist/Checklist.js"
import {Checkitem} from "../Checkitem/Checkitem.js"
import {ListProjector} from "./ListProjector.js"
import {ListSortMethod} from "./ListSortMethod.js"
import {ListProjection} from "./ListProjection.js"
import {ListInitializer} from "./ListInitializer.js"


export class List {
  id: string
  title: string
  idUser: string
  idBoard: string
  idCards: string[]
  isWatched: boolean
  sortMethod: ListSortMethod


  constructor(board: Board, initializer: ListInitializer) {
    this.id = v4()
    this.title = initializer.title
    this.idUser = board.idUser
    this.idBoard = board.id
    this.idCards = []
    this.isWatched = initializer.isWatched
    this.sortMethod = initializer.sortMethod
    board.idLists.push(this.id)
    List.items.push(this)
  }

  
  get user() {
    return User.items.find(user => user.id === this.idUser)
  }

  get board() {
    return Board.items.find(board => board.id === this.idBoard)
  }

  get cards() {
    return Card.items.filter(card => card.idList === this.id)
  }

  get labels() {
    const idLabels = new Set(...this.cards.map(card => card.idLabels))
    return Label.items.filter(label => idLabels.has(label.id))
  }

  get checklists() {
    return Checklist.items.filter(checklist => checklist.idList === this.id)
  }
  
  get checkitems() {
    return Checkitem.items.filter(checkitem => checkitem.idList === this.id)
  }


  project({keys, cards, checklists, checkitems}: ListProjector) {
    const output: ListProjection = {}
  
    keys.includes(ListKey.id) && (output.id = this.id)
    keys.includes(ListKey.title) && (output.title = this.title)
    keys.includes(ListKey.idUser) && (output.idUser = this.idUser)
    keys.includes(ListKey.idBoard) && (output.idBoard = this.idBoard)
    keys.includes(ListKey.isWatched) && (output.isWatched = this.isWatched)
    keys.includes(ListKey.sortMethod) && (output.sortMethod = this.sortMethod)
  
    cards && (output.cards = this.cards.map(card => card.project(cards)))
    checklists && (output.checklists = this.checklists.map(checklist => checklist.project(checklists)))
    checkitems && (output.checkitems = this.checkitems.map(checkitem => checkitem.project(checkitems)))
    
    return output
  }


  static items: List[] = []
   
  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default List