import {v4} from "uuid"
import {Card} from "./Card.js"
import {User} from "./User.js"
import {List} from "./List.js"
import {Error} from "../Error.js"
import {Board} from "./Board.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {Checklist} from "./Checklist.js"


export enum CheckitemKey {
  id = "id",
  idUser = "idUser",
  idList = "idList",
  idCard = "idCard",
  idBoard = "idBoard",
  content = "content",
  isComplete = "isComplete",
  idChecklist = "idChecklist",
}

export type CheckitemProjector = {
  keys: readonly CheckitemKey[]
}

export type CheckitemProjection = {
  id?: undefined | string
  idUser?: undefined | string
  idList?: undefined | string
  idCard?: undefined | string
  idBoard?: undefined | string
  content?: undefined | string
  isComplete?: undefined | boolean
  idChecklist?: undefined | string
}

export type CheckitemInitializer = {
  content: string
  isComplete: boolean
}

export const KEY = (
  /^(id|idUser|idList|idCard|idBoard|content|isComplete|idChecklist)$/u
)

export const CHECKITEM_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({
    trim: "both", 
    pattern: KEY,
  })]),
}, {
  name: "CHECKITEM_PROJECTOR",
  error: "CHECKITEM: INVALID_PROJECTOR",
})

export const CHECKITEM_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: CHECKITEM_PROJECTOR,
}, {
  name: "CHECKITEM_PROJECT_REQUEST",
  error: "CHECKITEM: INVALID_PROJECT_REQUEST",
})

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
    checklist.idCheckitems.add(this.id)
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