import {v4} from "uuid"
import {Card} from "./Card.js"
import {User} from "./User.js"
import {List} from "./List.js"
import {Board} from "./Board.js"
import {Error} from "../Error.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {Checkitem} from "./Checkitem.js"
import {CheckitemProjector} from "./Checkitem.js"
import {CheckitemProjection} from "./Checkitem.js"
import {CHECKITEM_PROJECTOR} from "./Checkitem.js"


export enum ChecklistFilter {
  ALL = "ALL",
  INCOMPLETE = "INCOMPLETE",
}

export enum ChecklistKey {
  id = "id",
  title = "title",
  filter = "filter",
  idUser = "idUser",
  idList = "idList",
  idCard = "idCard",
  idBoard = "idBoard",
}

export type ChecklistInitializer = {
  title: string
  filter: ChecklistFilter
}

export type ChecklistProjector = {
  keys: ChecklistKey[]
  checkitems?: CheckitemProjector
}

export type ChecklistProjection = {
  id?: undefined | string
  title?: undefined | string
  filter?: undefined | ChecklistFilter 
  idUser?: undefined | string
  idList?: undefined | string
  idCard?: undefined | string
  idBoard?: undefined | string
  checkitems?: undefined | CheckitemProjection[]
}

export const KEY = (
  /^(id|title|filter|idUser|idList|idCard|idBoard)$/u
)

export const CHECKLIST_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "CHECKLIST_PROJECTOR",
  error: "CHECKLIST: INVALID_PROJECTOR",
})

export const CHECKLIST_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: CHECKLIST_PROJECTOR,
}, {
  name: "CHECKLIST_PROJECT_REQUEST",
  error: "CHECKLIST: INVALID_PROJECT_REQUEST",
})

export class Checklist {
  id: string
  title: string
  filter: ChecklistFilter
  idUser: string
  idList: string
  idCard: string
  idBoard: string
  idCheckitems: Set<string>


  constructor(card: Card, aa: ChecklistInitializer) {
    this.id = v4()
    this.title = aa.title
    this.filter = aa.filter
    this.idUser = card.idUser
    this.idList = card.idList
    this.idCard = card.id
    this.idBoard = card.idBoard
    this.idCheckitems = new Set()
    card.idChecklists.add(this.id)
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