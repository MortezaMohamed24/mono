import {v4} from "uuid"
import {Card} from "../Card/Card.js"
import {User} from "../User/User.js"
import {List} from "../List/List.js"
import {Error} from "../../Error.js"
import {Board} from "../Board/Board.js"
import {Checklist} from "../Checklist/Checklist.js"
import {CheckitemKey} from "./CheckitemKey.js"
import {CheckitemProjector} from "./CheckitemProjector.js"
import {CheckitemProjection} from "./CheckitemProjection.js"
import {CheckitemInitializer} from "./CheckitemInitializer.js"


export class Checkitem {
  id: string
  idUser: string
  idList: string
  idCard: string
  content: string
  idBoard: string
  isComplete: boolean
  idChecklist: string


  constructor(checklist: Checklist, initializer: CheckitemInitializer) {
    this.id = v4()
    this.idUser = checklist.idUser
    this.idList = checklist.idList
    this.idCard = checklist.idCard
    this.content = initializer.content
    this.idBoard = checklist.idBoard
    this.isComplete = initializer.isComplete
    this.idChecklist = checklist.id
    checklist.idCheckitems.push(this.id)
    Checkitem.items.push(this)
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

  get checklist() {
    return Checklist.items.find(checklist => checklist.id === this.idChecklist)
  }


  project({keys}: CheckitemProjector) {
    const output: CheckitemProjection = {}
  
    keys.includes(CheckitemKey.id) && (output.id = this.id)
    keys.includes(CheckitemKey.idUser) && (output.idUser = this.idUser)
    keys.includes(CheckitemKey.idList) && (output.idList = this.idList)
    keys.includes(CheckitemKey.idCard) && (output.idCard = this.idCard)
    keys.includes(CheckitemKey.idBoard) && (output.idBoard = this.idBoard)
    keys.includes(CheckitemKey.content) && (output.content = this.content)
    keys.includes(CheckitemKey.isComplete) && (output.isComplete = this.isComplete)
    keys.includes(CheckitemKey.idChecklist) && (output.idChecklist = this.idChecklist)
    
    return output
  }


  static items: Checkitem[] = []
  
  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default Checkitem