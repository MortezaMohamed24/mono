import {v4} from "uuid"
import {Card} from "../Card/Card.js"
import {User} from "../User/User.js"
import {List} from "../List/List.js"
import {Board} from "../Board/Board.js"
import {Error} from "../../Error.js"
import {Checkitem} from "../Checkitem/Checkitem.js"
import {ChecklistKey} from "./ChecklistKey.js"
import {ChecklistFilter} from "./ChecklistFilter.js"
import {ChecklistProjector} from "./ChecklistProjector.js"
import {ChecklistProjection} from "./ChecklistProjection.js"
import {ChecklistInitializer} from "./ChecklistInitializer.js"


export class Checklist {
  id: string
  title: string
  filter: ChecklistFilter
  idUser: string
  idList: string
  idCard: string
  idBoard: string
  idCheckitems: string[]


  constructor(card: Card, aa: ChecklistInitializer) {
    this.id = v4()
    this.title = aa.title
    this.filter = aa.filter
    this.idUser = card.idUser
    this.idList = card.idList
    this.idCard = card.id
    this.idBoard = card.idBoard
    this.idCheckitems = []
    card.idChecklists.push(this.id)
    Checklist.items.push(this)
  }

  
  get user() {
    return User.items.find(user => user.id === this.idUser)
  }

  get list() {
    return List.items.find(list => list.id === this.idList)
  }

  get card() {
    return Card.items.find(card => card.id === this.idCard)
  }

  get board() {
    return Board.items.find(board => board.id === this.idBoard)
  }

  get checkitems() {
    return Checkitem.items.filter(checkitem => checkitem.idCard === this.id)
  }

  
  project({keys, checkitems}: ChecklistProjector) {
    const output: ChecklistProjection = {}

    keys.includes(ChecklistKey.id) && (output.id = this.id)
    keys.includes(ChecklistKey.title) && (output.title = this.title)
    keys.includes(ChecklistKey.filter) && (output.filter = this.filter)
    keys.includes(ChecklistKey.idUser) && (output.idUser = this.idUser)
    keys.includes(ChecklistKey.idList) && (output.idList = this.idList)
    keys.includes(ChecklistKey.idCard) && (output.idCard = this.idCard)
    keys.includes(ChecklistKey.idBoard) && (output.idBoard = this.idBoard)

    checkitems && (output.checkitems = this.checkitems.map(checkitem => checkitem.project(checkitems)))

    return output
  }


  static items: Checklist[] = []

  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default Checklist